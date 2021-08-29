print('Print all integers from 0 to 150:')
for x in range(151): 
    print(x)

print('Print all the multiples of 5 from 5 to 1,000')
for x in range(5,1001,5):
    print(x)

print('Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".')
for x in range(1,101):
    if x % 10 == 0: 
        print('Coding Dojo')
    elif x%5 == 0:
        print('Coding')
    else:
        print(x)

print('Add odd integers from 0 to 500,000, and print the final sum.')
sum = 0
for x in range(1, 500001, 2):
    sum+=x
print(sum)

print('Print positive numbers starting at 2018, counting down by fours.')
for x in range (2018, 0, -4):
    print(x)

print('Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult.')
def flexibleCounter(lowNum, highNum, mult):
    for x in range(lowNum, highNum+1):
        if x % mult == 0:
            print(x)
flexibleCounter(2,9,3)
