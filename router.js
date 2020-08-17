var router = require('express').Router()
var tourController = require('./controller/tour')

router.route('/')
    .get((_, res) => {
        var message = "Hello world"
        res.status(200).send({ message })
    })
    .all((_, res) => {
        var message = "Method not allowed"
        res.status(405).send(message)
    })

router.route('/tour')
    .get(tourController.findAll)
    .post(tourController.createOne)

router.route('/tour/:id')
    .get(tourController.findById)
    .put(tourController.updateOne)
    .delete(tourController.deleteOne)


module.exports = router