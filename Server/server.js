const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const env = require('dotenv')
const Product = require('./models/ProductModel');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const runDb = require('./config/db');
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/", productRoutes);
app.use("/", orderRoutes);

// run database connection

runDb();

const port = process.env.PORT || 5001;
const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();