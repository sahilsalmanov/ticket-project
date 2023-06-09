const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    locationName: String,
    location: String,
    date: Date,
    ticket: Boolean,
    minimumPrice: Number,
    maxsimumPrice: Number,
    seats: { type: mongoose.Schema.Types.ObjectId, ref: "Seats" },
    startTime: String,
    finishTime: String,
    popular: Boolean,
    imagePath: String,

})


const Events = mongoose.model('Events', eventSchema);

module.exports = {
    Events
}