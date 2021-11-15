const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, 'Name must be at least two characters long']
    },
    position: {
        type: String
    }
}, { timestamps: true })

module.exports.Player = mongoose.model('Player', PlayerSchema)