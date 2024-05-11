const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = mongoose.Schema({
    email: String,
    password: String
});

const userModel = mongoose.model("user", userSchema);
module.exports = ("userModel",userModel);