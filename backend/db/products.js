
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: "string",
    desc: "string",
    manager: 'string',
    img:"string",
    userId: "string"
})

module.exports = mongoose.model('products',productSchema)