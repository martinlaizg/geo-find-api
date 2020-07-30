var mongoose = require('mongoose')
var TourModel = mongoose.model('Tour')

exports.findAll = function (req, res) {
    TourModel.find((err, tours) => {
        if (err) return res.status(404).send({ message: "No data found" })
        res.status(200).send(tours)
    })
}

exports.createOne = function (req, res) {
    var tour = new TourModel({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        min_level: req.body.min_level
    })
    tour.save((err, tour) => {
        if (err) return res.status(500).send({ message: "Something went wrong" })
        res.status(200).send(tour)
    })
}

exports.findById = function (req, res) {
    TourModel.findById(req.params.id, (err, tour) => {
        if (err) return res.status(404).send({ message: "Tour not found" })
        res.status(200).send(tour)
    })
}

exports.updateOne = function (req, res) {
    TourModel.findById(req.params.id, (err, tour) => {
        if (err) return res.status(404).send({ message: "Tour not found" })

        tour.name = req.body.name
        tour.description = req.body.description
        tour.image = req.body.image
        tour.min_level = req.body.min_level

        tour.save((err, tour) => {
            if (err) return res.status(500).send({ message: "Something went wrong" })
            res.status(200).send(tour)
        })
    })
}

exports.deleteOne = function (req, res) {
    TourModel.findByIdAndRemove(req.params.id, (err, tour) => {
        if (err) return res.status(500).send({ message: "Something went wrong" })
        res.status(200).send({ message: "Removed successful" })
    })
}