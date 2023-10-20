const User = require("../models/userModel");
const asyncHandler = require('express-async-handler');


const allUsers = asyncHandler( async(req, res) => {
    const keyword = req.query.search ? {
        $or: [
            {name: {$regex: req.query.search , $options: "i"}},
            {email: {$regex: req.query.search, $options: "i" }},
        ],
    } : {};
   
const users = await User.find(keyword).find({_id: {$ne : req.User._id}}) ;
res.send(users);
});

module.exports = {allUsers};

