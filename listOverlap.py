# return a list of common elements from list1, list2 without duplicates
def lstOverlap(lst1, lst2):
    # lst = []
    #
    # for num in set(lst1):
    #     if num in lst2:
    #         lst.append(num)
    #
    # return lst

    return [num for num in set(lst1) if num in lst2]


lst1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
lst2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

print lstOverlap(lst1, lst2)
