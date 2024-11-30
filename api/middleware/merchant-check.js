const merchantSchema = require('../schemas/merchant-validation'); // Import Yup schema
const Merchants = require('../merchants/merchants-model'); // Assuming this is your merchant model

async function validateMerchant(req, res, next) {
  try {
    // Validate the request body against the schema
    await merchantSchema.validate(req.body, { abortEarly: false });
    next(); // Proceed if validation passes
  } catch (error) {
    // Return validation errors
    res.status(400).json({
      message: "Validation failed",
      errors: error.errors,
    });
  }
}

async function validateLoginPayload(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  next(); 
}

async function checkMerchantUnique(req, res, next) {
  const { email, shop_name } = req.body;

  try {
    // Check if email or shop_name already exists
    const existingMerchant = await Merchants.findBy({ email, shop_name });

    if (existingMerchant) {
      return res.status(400).json({
        message: "Email or shop name already exists. Please use a different email or shop name.",
      });
    }

    next(); // Proceed if no conflict
  } catch (err) {
    next(err); // Pass errors to error handler
  }
}

module.exports = {
    validateMerchant,
    checkMerchantUnique,
    validateLoginPayload,
};