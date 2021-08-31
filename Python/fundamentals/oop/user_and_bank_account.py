class User:
    def __init__(self, name):
        self.name = name
        self.accounts = {}

    def make_account(self, account_name, int_rate, balance = 0):
        self.accounts[account_name] = BankAccount(int_rate, balance)

    def make_deposit(self, account_name, amount):
        self.accounts[account_name].deposit(amount)
        return self

    def make_withdrawal(self, account_name, amount):
        self.accounts[account_name].withdraw(amount)
        return self

    def display_user_balance(self, account_name):
        print(f"User: {self.name}, Account: {self.accounts[account_name]}, Balance: ${self.account.balance}")

    def transfer_money(self, account_name, other_user_account_name, other_user, amount):
        self.make_withdrawal(account_name,amount)
        other_user.make_deposit(other_user_account_name, amount)
        return self


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
            print(
                f"Interest Rate = {account.int_rate*100}%, Balance = {account.balance}")



