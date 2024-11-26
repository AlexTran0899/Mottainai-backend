const router = require('express').Router()
const Merchants = require('./merchants-model')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs')
const buildToken = require('../utils/token-builder')
const {validateMerchant, checkMerchantUnique } = require('../middleware/merchant-check'); // Import validation middleware


router.get('/', (req, res, next) => {
  Merchants.getAll()
    .then(items => res.json(items))
    .catch(next)
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
      const token = buildToken(data); // Generate a token for the new merchant
      res.status(201).json({
        merchant_id: data.merchant_id,
        email: data.email,
        shop_name: data.shop_name,
        token,
      });
    })
    .catch(next);
});

module.exports = router;