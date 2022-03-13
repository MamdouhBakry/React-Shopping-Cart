const mongoose = require('mongoose');
const runDb = () => {
    mongoose.connect(
        `mongodb+srv://root:admin@cluster0.ipjag.mongodb.net/shoping_cart?retryWrites=true&w=majority`
    )
        .then(() => {
            console.log("Database Connected");
        });
}
module.exports = runDb;