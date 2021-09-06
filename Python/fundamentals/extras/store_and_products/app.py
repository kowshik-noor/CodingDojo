from modules import product, store

Store = store.Store
Product = product.Product

kawran = Store('Kawran Bazaar')

kawran.add_product(Product('Mango', 3.99, 'fruit')).add_product(Product(
    'Spinach', 4.99, 'vegetable')).add_product(Product('Apple', 2.49, 'fruit'))

for product in kawran.products:
    product.print_info()

kawran.set_clearance('fruit', 0.50)

for product in kawran.products:
    product.print_info()

kawran.inflation(0.05)

for product in kawran.products:
    product.print_info()
