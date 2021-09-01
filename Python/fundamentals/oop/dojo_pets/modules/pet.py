class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.tricks = tricks
        self.type = type
        self.energy = 0
        self.health = 0


    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.energy += 5
        self.health += 10
        return self

    def play(self):
        self.health += 5
        return self

class Dog(Pet):
    def __init__(self, name, type, tricks):
        super().__init__(name, type, tricks)

    def noise(self):
        print('Borf')

class Cat(Pet):
    def __init__(self, name, type,tricks):
        super().__init__(name, type, tricks)

    def noise(self):
        print('Mao')

class GoldFish(Pet):
    def __init__(self, name, type, tricks):
        super().__init__(name, type, tricks)

    def noise(self):
        print('Glorp')

