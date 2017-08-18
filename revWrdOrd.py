def revWrdOrd(str):
    revStr = ""
    wrd = ""

    for i in range(len(str)):
        if str[i] != " ":
            wrd += str[i]
        else:
            if wrd != "":
                if revStr == "":
                    revStr = wrd
                else:
                    revStr = "{} {}".format(wrd, revStr)
                wrd = ""

    if wrd != "":
        revStr = "{} {}".format(wrd, revStr)

    return revStr

str = "This is a test!"
print len(str)
print revWrdOrd(str)
print len(revWrdOrd(str))
