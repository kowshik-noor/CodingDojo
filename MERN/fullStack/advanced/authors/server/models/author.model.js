const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Name must be at least three characters long']
    }
}, {timestamps: true})

module.exports.Author = mongoose.model('Author', AuthorSchema)