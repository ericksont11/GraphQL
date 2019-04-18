const mongoose = require('mongoose')

const Schema = mongoose.Schema
const bookSchema = ({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('Book', bookSchema)