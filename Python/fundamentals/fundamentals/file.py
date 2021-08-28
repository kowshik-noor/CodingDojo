# variable declarations
num1 = 42 # initialize number
num2 = 2.3 # initialize number
boolean = True # initialize boolean
string = 'Hello World' # initialize string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # initialize dictionary
fruit = ('blueberry', 'strawberry', 'banana') # initialize tuple
print(type(fruit)) # print type of variable 'fruit'
print(pizza_toppings[1]) # print 'Sausage'
pizza_toppings.append('Mushrooms') # add 'Mushrooms' to the pizza_toppings list
print(person['name']) # print 'John'
person['name'] = 'George' # change the name value of person to 'George'
person['eye_color'] = 'blue' # change the eye color of person to 'blue'
print(fruit[2]) 

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

for x in range(5):
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5):
    print(x)
    x += 1

pizza_toppings.pop()
pizza_toppings.pop(1)

print(person)
person.pop('eye_color')
print(person)

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3) # NameError
# num3 = 72
# fruit[0] = 'cranberry' # TypeError
# print(person['favorite_team']) # KeyError 
# print(pizza_toppings[7])
#   print(boolean) # Indentation error
# fruit.append('raspberry') # AttributeError
# fruit.pop(1) # AttributeError
