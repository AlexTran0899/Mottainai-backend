const router = require('express').Router()
const Items = require('./Items-model')

router.get('/getall', (req, res, next) => {
  Items.getAll()
    .then(items => res.json(items))
    .catch(next)
});

// router.put('/update', (req, res, next) => {
//   router.update(req.body)
//     .then(data => res.json(data))
//     .catch(next)
// })

module.exports = router;