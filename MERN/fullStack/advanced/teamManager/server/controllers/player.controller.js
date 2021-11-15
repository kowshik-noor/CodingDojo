const { Player } = require('../models/player.models')


module.exports = {
    newPlayer: (req, res) => {
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err))
    },
    
    getPlayers: (req, res) => {
        Player.find()
            .then(players => res.json(players))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    deletePlayer: (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}