def strRepeat(arr):
    my_dict = {}
    for str_ in arr:
        if str in my_dict:
            return True
        my_dict[str_] = 1
    return False

    # arr2 = arr[:]
    # for str1 in arr:
    #     arr2.remove(str1)
    #     if str1 in arr2:
    #         return True
    # return False

arr = ["a", "b", "c", "b"]
print(strRepeat(arr))
