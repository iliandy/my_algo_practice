# takes a list and returns a new list that contains all the elements of the first list minus all the duplicates
def listRemoveDup(lst):
    # return list(set(lst))
    my_lst = []
    for elem in lst:
        if elem not in my_lst:
            my_lst.append(elem)
    return my_lst

lst = [1, 1, 1, 2, 2, 2, 3, 3, 3]
print listRemoveDup(lst)
