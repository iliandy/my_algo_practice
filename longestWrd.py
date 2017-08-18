def longestWrd(str):
    long_wrd = ""
    wrd = ""

    for i in range(len(str)):
        if str[i] != " ":
            wrd += str[i]
        else:
            if len(wrd) > len(long_wrd):
                long_wrd = wrd
            wrd = ""

    return long_wrd


print longestWrd("Snap crackle pop makes the world go round!")
