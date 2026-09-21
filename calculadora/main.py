from funcionesMiniCalculadora import suma, resta, mult, div, mod, poW, sum3

x1 = float(input("Digite un numero: "))
x2 = float(input("Digite un numero: "))
print(x1 + x2)

ejecutando = True

while ejecutando:
    print("\n-- Calculadora --")
    print("(1) Sumar dos numeros")
    print("(2) Restar dos numeros")
    print("(3) Multiplicar dos numeros")
    print("(4) Dividir dos numeros")
    print("(5) Obtener el residuo de dos numeros")
    print("(6) Sumar 3 numeros")
    print("(7) Mix de 3 operaciones o mas (ej: 2 + 4 - 3)")
    print("(8) Salir")

    try:
        opcion = int(input("\nSeleccione una opcion: "))
    except ValueError:
        print("Opcion invalida, ingrese un numero.")
        continue

    if 1 <= opcion <= 5:
        try:
            n1 = float(input("- Digite el primer numero: "))
            n2 = float(input("- Digite el segundo numero: "))
        except ValueError:
            print("Error: Debe ingresar numeros validos.")
            continue

        match opcion:
            case 1: print("Resultado:", suma(n1, n2))
            case 2: print("Resultado:", resta(n1, n2))
            case 3: print("Resultado:", mult(n1, n2))
            case 4: print("Resultado:", div(n1, n2))
            case 5: print("Resultado:", mod(n1, n2))

    elif opcion == 6:
        try:
            n1 = float(input("- Digite el primer numero: "))
            n2 = float(input("- Digite el segundo numero: "))
            n3 = float(input("- Digite el tercer numero: "))
            print("Resultado:", sum3(n1, n2, n3))
        except ValueError:
            print("Error: Debe ingresar numeros validos.")

    elif opcion == 7:
        expresion = input("- Ingrese la operacion (ej. 2 + 4 - 3): ")
        try:
            resultado = eval(expresion)
            print("Resultado:", resultado)
        except Exception:
            print("Expresion invalida.")
            
    elif opcion == 8:
        print("Fin del programa.")
        ejecutando = False

    else:
        print("Opción fuera de rango, intente de nuevo.")