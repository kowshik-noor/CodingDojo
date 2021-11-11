const controller = require('../controllers/product.controller')

module.exports = app => {
    app.post('/api/products', controller.newProduct)
}