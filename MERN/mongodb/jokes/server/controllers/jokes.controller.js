const Joke = require("../models/jokes.model")

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json({ jokes: allJokes }))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    getAJoke: (req, res) => {
        Joke.findOne({ _id: req.params._id })
            .then(aJoke => res.json({ joke: aJoke }))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json({ joke: newJoke }))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    editJoke: (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            {new: true, runValidators: true}
        )
            .then(updatedJoke => res.json({joke: updatedJoke}))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params._id})
            .then(result => res.json({ result: result}))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    randomJoke: (req, res) => {
        Joke.estimatedDocumentCount()
            .then(count => {
                const random = Math.floor(Math.random() * count)
                Joke.findOne().skip(random)
                    .then(result => res.json({joke: result}))
            })
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}