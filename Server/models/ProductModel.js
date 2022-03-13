const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    _id: String,
    title: String,
    imgUrl: String,
    desc: String,
    price: Number,
    sizes: [String]
})
const Product = mongoose.model("product", productSchema);
module.exports = Product;