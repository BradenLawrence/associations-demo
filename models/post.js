var mongoose = require("mongoose")

// POST
var postSchema = new mongoose.Schema({
    title: String,
    text: String
})

module.exports = mongoose.model("Post", postSchema)