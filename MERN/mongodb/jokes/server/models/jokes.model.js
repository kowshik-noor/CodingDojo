const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: 10
    },
    punchline: {
        type: String,
        minlength: 3
    }
})

const Joke = mongoose.model("joke", JokeSchema)

module.exports = Joke