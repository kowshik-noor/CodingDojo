const controller = require('../controllers/player.controller')

module.exports = app => {
    app.post('/api/players', controller.newPlayer)
    app.get('/api/players', controller.getPlayers)
    app.delete('/api/players/:id', controller.deletePlayer)
}