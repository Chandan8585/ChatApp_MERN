const mongoose = require("mongoose");
const userSchema =new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, unique: true ,required: true },
    password: {type: String, required: true},
    pic : {
        type: String,
        required: true,
        default: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeStamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User


 