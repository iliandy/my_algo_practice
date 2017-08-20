# arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]. Write one line of Python that takes this list a and makes a new list that has only the even elements of this list in it.
def listCompEvenElem(lst):
    return [num for num in lst if num % 2 == 0]

lst = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print listCompEvenElem(lst)
