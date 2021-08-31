x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]

x[1][0] = 15

students[0]['last_name'] = 'Bryant'

sports_directory['soccer'][0] = 'Andres'

z[0]['y'] = 30


students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]

def iterateDictionary(things):
    for thing in things: 
        for key in thing.keys():
            if list(thing.keys()).index(key) != len(thing.keys()) - 1:
                print(f"{key} - {thing[key]}", end=", ")
            else:
                print(f"{key} - {thing[key]}")

def iterateDictionary2(key_name, some_list):
    for list_item in some_list:
        print(list_item[key_name])


def printInfo(some_dict):
    for thing in some_dict:
        print(f"{len(some_dict[thing])} {thing.upper()}")
        for item in some_dict[thing]:
            print(item)
        if list(some_dict.keys()).index(thing) != len(some_dict.keys()) - 1:
            print(" ")

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
