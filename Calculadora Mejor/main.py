def addmultiplenumbers(lista_numeros):
    acumulado = 0
    for num in lista_numeros:
        acumulado += num
    return acumulado

def multiplymultiplenumbers(lista_numeros):
    acumulado = 1
    for num in lista_numeros:
        acumulado *= num
    return acumulado

def isiteven(num):
    return num%1 == 0 and num%2 == 0

def isitaninteger(num):
    return num%1 == 0
    
def main():
    # Version acorde al ejercicio, con funciones ya corregidas:
    
    # isiteven
    number=float(input("Es entero?\nEs par?\nIngrese su numero para averiguarlo: "))
    resultado=print(isiteven(number))

    # isitaninteger
    number=float(input("Es entero?\nIngrese su numero para averiguarlo: "))
    resultado=print(isitaninteger(number)) 

# Primer version:
    # addmultiplenumbers
    """ciclos=int(input("Cuantos numeros desea sumar?\nRespuesta: "))
    resultado=addmultiplenumbers(ciclos)
    print(resultado)"""

    # multiplymultiplenumbers
    """ciclos=int(input("Cuantos numeros desea multiplicar?\nRespuesta: "))
    resultado=addmultiplenumbers(ciclos)
    print(resultado)"""

if __name__=="__main__":
    main()