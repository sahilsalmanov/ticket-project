const { default: mongoose } = require("mongoose");

const seatsSchema = new mongoose.Schema({
    A1: Number,
    A2: Number,
    B1: Number,
    B2: Number,
    VIP: Number,
    General: Number

})


const Seats = mongoose.model('Seats', seatsSchema);

module.exports = {
    Seats
}