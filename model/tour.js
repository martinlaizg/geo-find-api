exports = module.exports = function (mongoose) {

    var tourSchema = new mongoose.Schema({
        name: { type: String },
        description: { type: String },
        image: {
            type: String,
            default: ''
        },
        min_level: {
            type: String,
            enum: ['therm', 'compass', 'map'],
            default: 'map'
        }
    })

    mongoose.model('Tour', tourSchema)

}