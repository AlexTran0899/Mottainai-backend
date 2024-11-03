const router = require('express').Router()
const Merchants = require('./merchants-model')

router.get('/', (req, res, next) => {
  Merchants.getAll()
    .then(items => res.json(items))
    .catch(next)
});

// router.put('/update', (req, res, next) => {
//   router.update(req.body)
//     .then(data => res.json(data))
//     .catch(next)
// })

module.exports = router;