const controller = require('../controllers/author.controller')

module.exports = app => {
    app.post('/api/authors', controller.newAuthor)
    app.get('/api/authors', controller.getAuthors)
    app.put('/api/authors/:id', controller.updateAuthor)
    app.get('/api/authors/:id', controller.getAuthor)
    app.delete('/api/authors/:id', controller.deleteAuthor)
}