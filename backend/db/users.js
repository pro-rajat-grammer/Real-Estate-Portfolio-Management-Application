
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    password:"string"
})

module.exports=mongoose.model("users",userSchema)
