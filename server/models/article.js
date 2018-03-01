const mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    text: String,
    date: String
})

let Article = mongoose.model('article', articleSchema)

module.exports = Article