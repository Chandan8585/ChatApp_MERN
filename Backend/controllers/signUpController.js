const User = require("../models/userModel");
const CryptoJS = require("crypto-js");

const signUpHandler = async(req, res)=> {
    try {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
     const savedUser = await newUser.save();
     res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({message: "Error while creating new User"});
    }
}

module.exports = signUpHandler

