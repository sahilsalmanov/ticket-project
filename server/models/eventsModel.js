const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    locationName: String,
    location: String,
    date: Date,
    ticket: Boolean,
    minimumPrice: Number,
    maxsimumPrice: Number,
    startTime: String,
    finishTime: String,
    popular: Boolean,
    imagePath: String

})


const Events = mongoose.model('Events', eventSchema);

module.exports = {
    Events
}