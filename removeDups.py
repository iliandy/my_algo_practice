# my own practice...
def removeDups(lst):
    # sorted(set(myList))
    new_lst = []
    for i in lst:
        if i not in new_lst:
            new_lst += [i]
    return new_lst

myList = [1,1,1,2,3,4,3,4,6]
print removeDups(myList)
