# https://leetcode.com/problems/find-the-difference/description/
def findDifference(str1, str2):
    return str2.replace(str1, "")

print(findDifference("abcd", "abcde"))
