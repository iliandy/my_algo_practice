def strToWrdArr(str):
    arr = []
    wrd = ""

    for i in range(len(str)):
        if str[i] != " ":
            wrd += str[i]
        else:
            if wrd != "":
                arr.append(wrd)
                wrd = ""

    if wrd != "":
        arr.append(wrd)

    return arr

str = "Life is not a     drill!"
print strToWrdArr(str)
