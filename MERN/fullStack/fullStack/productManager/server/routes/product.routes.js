const controller = require('../controllers/product.controller')

module.exports = app => {
    app.post('/api/products', controller.newProduct)
    app.get('/api/products', controller.getProducts)
    app.get('/api/products/:id', controller.getProduct)
    app.put('/api/products/:id', controller.updateProduct)
    app.delete('/api/products/:id', controller.deleteProduct)
}