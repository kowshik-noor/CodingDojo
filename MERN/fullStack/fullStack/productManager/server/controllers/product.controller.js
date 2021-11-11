const {Product} = require('../models/product.model')

module.exports = {
    newProduct: (req, res) => {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}