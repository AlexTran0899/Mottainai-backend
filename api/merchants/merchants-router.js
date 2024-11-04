const router = require('express').Router()
const Merchants = require('./merchants-model')
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res, next) => {
  Merchants.getAll()
    .then(items => res.json(items))
    .catch(next)
});

router.post('/', (req, res, next) => {
  const body = req.body
  body.merchant_id = uuidv4()

  Merchants.createNewMerchant(body)
    .then(data => res.json(data))
    .catch(next)
});


module.exports = router;