const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    name: String,
    email: String
}, {
    timestamps: true
})

module.exports = mongoose.model('order', orderSchema)