const { Author } = require('../models/author.model')


module.exports = {
    newAuthor: (req, res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },
    
    getAuthors: (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    getAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}