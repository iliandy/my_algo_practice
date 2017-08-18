# Create a function that accepts a single array as an argument. Given an array of integers, x, sort x and
# split the integers into three smaller arrays of equal length. If the length of x is not evenly divisible by
# three, increase the size of the smaller arrays by one starting from the first array. The function should
# return an array of arrays.
#
# Example:
# Input = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14]
# Output = [ [0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16] ]
import math
def triSort(lst):
    lst.sort()
    third_len = int(math.ceil(len(lst)/3.))
    if len(lst) % 3 == 1:
        return [lst[:third_len], lst[third_len:2*third_len-1], lst[2*third_len-1:]]
    return [lst[:third_len], lst[third_len:2*third_len], lst[2*third_len:]]

# lst = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14, 100, 101]
lst = [2,1,3,4]

print triSort(lst)
