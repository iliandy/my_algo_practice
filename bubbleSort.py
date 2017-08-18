def bubbleSort(lst):
    sorted = False
    while not sorted:
        sorted = True
        for i in range(len(lst)-1):
            if lst[i] > lst[i+1]:
                temp = lst[i+1]
                lst[i+1] = lst[i]
                lst[i] = temp
                sorted = False
    return lst

lst = [0,9,6,4,2,7,5,3]
print bubbleSort(lst)
