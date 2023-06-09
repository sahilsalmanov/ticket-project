const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    type: String

})


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}