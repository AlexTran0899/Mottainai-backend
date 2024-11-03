const router = require('express').Router()
const Items = require('./Items-model')

router.get('/', (req, res, next) => {
  Items.getAll()
    .then(items => res.json(items))
    .catch(next)
});
router.get('/:merchant_id', (req, res, next) => {
  const merchant_id = req.params.merchant_id
  Items.getByMerchantId(merchant_id)
    .then(items => res.json(items))
    .catch(next)
});

module.exports = router;