class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def print_info(self):
        print(f"Name: {self.name}, Price: {self.price}, Category: {self.category} ")

    def update_price(self, percent_change, is_increased):
        if is_increased:
            self.price += self.price * percent_change
            self.price = round(self.price, 2)
        else:
            self.price -= self.price * percent_change
            self.price = round(self.price, 2)
