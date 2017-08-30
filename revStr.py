def revStr(str):
    # return str[::-1]
    # return "".join(reversed(str))
    rev_str = ""
    for i in range(len(str)-1, -1, -1):
        rev_str += str[i]
    return rev_str

str = "hello world"
print(revStr(str))
