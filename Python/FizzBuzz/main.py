import test
contador = 1

while(contador <1001):
    if(contador%3 == 0 and contador%5 == 0):
        print("Fizzbuzz")
    elif(contador%3 == 0):
        print("Fizz")
    elif(contador%5 == 0):
        print("Buzz")
    else:
        print(contador)
    contador+=1