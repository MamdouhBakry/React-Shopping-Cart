const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const env = require('dotenv')
const Product = require('./models/ProductModel');
const router = require('./routes/routes');
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/", router);


mongoose
    .connect(
        `mongodb+srv://root:admin@cluster0.ipjag.mongodb.net/shoping_cart?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Database Connected");
    });



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