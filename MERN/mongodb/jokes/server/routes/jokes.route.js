const jokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.post('/api/jokes/new', jokeController.createJoke)
    app.get('/api/jokes/random', jokeController.randomJoke)
    app.get('/api/jokes/:_id', jokeController.getAJoke)
    app.get('/api/jokes', jokeController.getAllJokes)
    app.put('/api/jokes/update/:_id', jokeController.editJoke)
    app.delete('/api/jokes/delete/:_id', jokeController.deleteJoke)
}