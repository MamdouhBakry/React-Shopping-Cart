const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');

router.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})
router.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const saveP = await newProduct.save();
    res.send(saveP);
})
router.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})
module.exports = router;