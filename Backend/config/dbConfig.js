const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlparser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log('Error connecting to MongoDb', error)
    }
};
module.exports = connectDB;