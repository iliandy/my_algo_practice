# https://leetcode.com/problems/move-zeroes/description/
def moveZeros(nums):
    for i in range(len(nums)):
        if nums[i] is 0:
            nums.append(nums.pop(i))
    return nums

nums = [0, 1, 0, 3, 12]
print(moveZeros(nums))
