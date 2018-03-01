const mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    username: String,
    password: String
})

let User = mongoose.model('user', userSchema)

module.exports = User
