class User:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def make_deposit(self, amount):
        self.balance += amount
        return self

    def make_withdrawal(self, amount):
        self.balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.balance}")
    
    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

kowshik = User("Kowshik Noor")
sadia = User("Kshboo Sadia")
karen = User("Karen Subha")

kowshik.make_deposit(400).make_deposit(1200).make_deposit(1400).make_withdrawal(400).display_user_balance()

sadia.make_deposit(20).make_deposit(150).make_withdrawal(100).make_withdrawal(5).display_user_balance()

karen.make_deposit(30).make_withdrawal(5).make_withdrawal(3).make_withdrawal(1).display_user_balance()

kowshik.transfer_money(sadia, 20).display_user_balance()
sadia.display_user_balance()