const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const campGroundSchema = new Schema({
    title : String,
    image : String,
    price : Number,
    description : String,
    location : String
})

module.exports = mongoose.model('Campground', campGroundSchema) // we are expoting the model here