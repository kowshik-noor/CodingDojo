class BankAccount:
    all_accounts = []

    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdraw(self, amount):
        if (self.balance - amount) < 0:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self
    
    def display_account_info(self):
        print(f"Balance: ${self.balance}")

    def yield_interest(self):
        self.balance += (self.balance * self.int_rate)
        return self

    @classmethod
    def display_all_accounts(cls):
        for account in cls.all_accounts:
            print(f"Interest Rate = {account.int_rate*100}%, Balance = {account.balance}")

kowshik = BankAccount(0.5, 484)
sadia = BankAccount(0.01)

kowshik.deposit(1400).deposit(60).deposit(5).withdraw(1200).yield_interest().display_account_info()

sadia.deposit(20).deposit(20).withdraw(5).withdraw(3).withdraw(1).withdraw(10).yield_interest().display_account_info()

BankAccount.display_all_accounts()