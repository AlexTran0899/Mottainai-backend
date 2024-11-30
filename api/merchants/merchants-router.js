const router = require('express').Router()
const Merchants = require('./merchants-model')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs')
const {tokenBuilderMerchant} = require('../utils/token-builder')
const {validateMerchant, checkMerchantUnique, validateLoginPayload } = require('../middleware/merchant-check'); // Import validation middleware
const restricted = require('../middleware/restricted')

// Login endpoint
router.post('/login', validateLoginPayload, (req, res, next) => {
  const { email, password } = req.body;

  Merchants.findBy({ email: email.toLowerCase() })
    .then((merchant) => {
      if (!merchant) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      if (bcrypt.compareSync(password, merchant.password)) {
        const token = tokenBuilderMerchant(merchant);
        res.json({
          message: `Welcome back, ${merchant.shop_name}!`,
          merchant_id: merchant.merchant_id,
          email: merchant.email,
          shop_name: merchant.shop_name,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch((error) => {
      next(error); // Pass error to the error-handling middleware
    });
});

router.post('/register', validateMerchant, checkMerchantUnique, (req, res, next) => {
  let merchant = req.body;

  // Generate a unique merchant_id
  merchant.merchant_id = uuidv4();

  // Lowercase email
  merchant.email = merchant.email.toLowerCase();

  // Hash password
  const hash = bcrypt.hashSync(merchant.password, 8);
  merchant.password = hash;

  // Add merchant to database
  Merchants.createNewMerchant(merchant)
    .then(data => {
      const token = tokenBuilderMerchant(data);
      res.status(201).json({
        merchant_id: data.merchant_id,
        email: data.email,
        shop_name: data.shop_name,
        token,
      });
    })
    .catch(next);
});

router.get('/', restricted, (req, res, next) => {
  res.json(req.decodedJwt)
})



module.exports = router;