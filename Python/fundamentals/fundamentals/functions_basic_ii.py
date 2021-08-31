def countdown(num):
    result = []
    for x in range(num, -1, -1):
        result.append(x)
    return result

def print_and_return(nums):
    print(nums[0])
    return nums[1]

def first_plus_length(nums):
    return nums[0]+len(nums)

def values_greater_than_second(nums):
    if len(nums) < 2:
        return False
    else:
        newNums = []
        for num in nums:
            if num > nums[1]:
                newNums.append(num)
        print(len(newNums))
        return newNums

def length_and_value(size, value):
    result = []
    for x in range(size):
        result.append(value)
    return result


