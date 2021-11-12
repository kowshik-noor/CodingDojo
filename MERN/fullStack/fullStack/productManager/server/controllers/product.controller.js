const {Product} = require('../models/product.model')

module.exports = {
    newProduct: (req, res) => {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    getProducts: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    getProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}