# diy modulo without % operator
def myModulo(dividend, divisor):
    quotient = dividend / divisor
    remainder = quotient - int(quotient)
    return round(remainder * divisor)

    # while(dividend > divisor):
    #     dividend -= divisor
    # return dividend

print(8 % 3)
print(myModulo(8, 3))
