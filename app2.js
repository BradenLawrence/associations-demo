var mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/references-demo")


// POST
var postSchema = new mongoose.Schema({
    title: String,
    text: String
})
var Post = mongoose.model("Post", postSchema)

// USER
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})
var User = mongoose.model("User", userSchema)

// User.create({
//         name: "Kenzie",
//         email: "chezwhiz@skweeker.com"
//     }, function(error, dbUser){
//         if(error){
//             console.log(error)
//         } else {
//             console.log(dbUser)
//         }      
// })

// Post.create({
//     title: "fdsfdsfdfagbcbcv",
//     text: "fdsfs"
// }, function(error, dbPost){
//         if(error){
//             console.log(error)
//         } else {
//             User.findOne({email: "chezwhiz@skweeker.com"}, function(error, dbUser){
//                 if(error){
//                     console.log(error)
//                 } else {
//                     dbUser.posts.push(dbPost)
//                     dbUser.save(function(error, dbResponse){
//                         if(error){
//                             console.log(error)
//                         } else {
//                             console.log(dbResponse)
//                         }
//                     })
//                 }
//             })
//         }      
// })

User.find({email: "chezwhiz@skweeker.com"}).populate("posts").exec(function(error, user){
    if(error){
        console.log(error)
    } else {
        console.log(user)
    }
})