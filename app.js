var mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/associations_demo")


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
    posts: [postSchema]
})
var User = mongoose.model("User", userSchema)

// User.create({
//     name: "Marten",
//     email: "thecheeseknees@skweeker.com"
// })

// var myUser = new User({
//     name: "Pip",
//     email: "pipsquike@skweeker.com"
// })

// myUser.posts.push({
//     title: "How to bite people and get away with it",
//     text: "Just do it! There are no consequences!"
// })

// myUser.posts.push({
//     title: "My three greatest tricks",
//     text: "1) Spin   2) Up, up, up!  3) Tap, tap, tap!"
// })

// myUser.save(function(error, dbUser){
//     if(error){
//         console.log("Oh no!")
//         console.log(error)
//     } else {
//         console.log(dbUser)
//     }
// })

// User.findOne({name: "Marten"}, function(error, dbUser){
//     if(error){
//         console.log(error)
//     } else {
//         dbUser.posts.push({
//             title: "Everything I know about chairs",
//             text: "They are scary"
//         })
//         dbUser.save(function(error, dbUser){
//             if(error){
//                 console.log(error)
//             } else {
//                 console.log(dbUser)
//             }
//         })
//     }
// })