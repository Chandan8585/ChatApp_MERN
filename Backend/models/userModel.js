const mongoose = require("mongoose");
const userShema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    pic : {
        type: String,
        required: true,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Foriginal-whatsapp-no-profile-pic-icon-in-2023--945826359227111743%2F&psig=AOvVaw1fYXm6iVH-9jM7seAFpYuY&ust=1697192608672000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICNsKal8IEDFQAAAAAdAAAAABAE"
    },
},{
    timeStamps: true
});

const User = mongoose.model("User", userShema);
module.exports = User