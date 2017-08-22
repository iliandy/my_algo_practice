
# def strRepeat(arr):
#     my_dict = {}
#     for str in arr:
#         if str in my_dict:
#             return True
#         my_dict[str] = 1
#     return False
#
#     # arr2 = arr[:]
#     # for str1 in arr:
#     #     arr2.remove(str1)
#     #     if str1 in arr2:
#     #         return True
#     # return False
#
# arr = ["a", "b", "c", "b"]
# print strRepeat(arr)

def revStr(str):
    # return str[::-1]
    # return "".join(reversed(str))
    rev_str = ""
    for i in range(len(str)-1, -1, -1):
        rev_str += str[i]
    return rev_str

str = "hello world"
print revStr(str)
