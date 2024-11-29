const yup = require('yup');

// Define Yup schema for merchant validation
const merchantSchema = yup.object().shape({
  email: yup.string().email().max(50).required("Email is required."),
  password: yup.string().min(8).max(255).required("Password is required."),
  shop_name: yup.string().min(2).max(50).required("Shop name is required."),
  description: yup.string().max(255).required("Description is required."),
  shop_logo_url: yup.string().url().max(100).required("Shop logo URL is required."),
  shop_banner_url: yup.string().url().max(100).required("Shop banner URL is required."),
  country: yup.string().min(2).max(50).required("Country is required."),
  city: yup.string().min(2).max(50).required("City is required."),
  state: yup.string().min(2).max(50).required("State is required."),
  zipcode: yup.string().min(5).max(10).required("Zipcode is required."),
  address_1: yup.string().min(5).max(100).required("Address 1 is required."),
  address_2: yup.string().min(5).max(100).nullable(true), // Optional
  phone_number: yup.string().min(10).max(15).required("Phone number is required"), // Optional
  pickup_start_time: yup.string().required("Pickup start time is required."),
  pickup_end_time: yup.string().required("Pickup end time is required."),
});

module.exports = merchantSchema;
