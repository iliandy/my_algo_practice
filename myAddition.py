# diy addition without + operator
def myAddition(num1, num2):
    # return num1 - -num2
	return (num1).__add__(num2)
	
    # if (num2 == 0):
        # return num1
    # else:
        # return myAddition(num1 ^ num2, (num1 & num2) << 1)

print(myAddition(3, -8))
