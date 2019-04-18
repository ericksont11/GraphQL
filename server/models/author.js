const mongoose = require('mongoose')

const Schema = mongoose.Schema
const authorSchema = ({
    name: String,
    age: Number,
    authorId: String
})

module.exports = mongoose.model('Author', authorSchema)