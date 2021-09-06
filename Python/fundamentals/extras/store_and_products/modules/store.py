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