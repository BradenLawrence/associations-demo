var mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/references-demo")

var Post = require("./models/post")

var User = require("./models/user")

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
//     title: "How to win at wrestling your brother",
//     text: "Bite his tail, obv!"
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