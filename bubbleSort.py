def bubbleSort(lst):
    sort = False
    while not sort:
        sort = True
        for i in range(len(lst)-1):
            if lst[i] > lst[i+1]:
                temp = lst[i+1]
                lst[i+1] = lst[i]
                lst[i] = temp
                sort = False
    return lst

lst = [0,9,6,4,2,7,5,3]
print bubbleSort(lst)
