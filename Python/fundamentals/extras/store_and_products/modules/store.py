import product
Product = product.Product

class Store:
    def __init__(self, name):
        self.name = name
        self.products = []

    def add_product(self, new_product):
        self.products.append(new_product)
        return self
    
    def sell_product(self, id):
        self.products.pop(id).print_info()
        return self

    def inflation(self, percent_increase):
        for product in self.products:
            product.update_price(percent_increase, True)
        
    def set_clearance(self, category, percent_discount):
        for product in self.products:
            if product.category == category:
                product.update_price(percent_discount, False)


kawran = Store('Kawran Bazaar')

kawran.add_product(Product('Mango', 3.99, 'fruit')).add_product(Product('Spinach', 4.99, 'vegetable')).add_product(Product('Apple', 2.49, 'fruit'))

for product in kawran.products:
    product.print_info()

kawran.set_clearance('fruit', 0.50)

for product in kawran.products:
    product.print_info()

kawran.inflation(0.05)

for product in kawran.products:
    product.print_info()
