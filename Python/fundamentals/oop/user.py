class User:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def make_deposit(self, amount):
        self.balance += amount

    def make_withdrawal(self, amount):
        self.balance -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.balance}")
    
    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)

kowshik = User("Kowshik Noor")
sadia = User("Kshboo Sadia")
karen = User("Karen Subha")

kowshik.make_deposit(400)
kowshik.make_deposit(1200)
kowshik.make_deposit(1400)
kowshik.make_withdrawal(400)
kowshik.display_user_balance()

sadia.make_deposit(20)
sadia.make_deposit(150)
sadia.make_withdrawal(100)
sadia.make_withdrawal(5)
sadia.display_user_balance()

karen.make_deposit(30)
karen.make_withdrawal(5)
karen.make_withdrawal(3)
karen.make_withdrawal(1)
karen.display_user_balance()

kowshik.transfer_money(sadia, 20)
kowshik.display_user_balance()
sadia.display_user_balance()