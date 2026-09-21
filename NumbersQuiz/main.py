def trivia_fetch(num):
  trivia ={
    1: "La Tierra es el único planeta del Sistema Solar que posee una sola luna",
    2: "En el mundo hay por lo menos 2 personas identicas, tú y tu Doppelganger",
    45: "El significado de la vida, del universo y todo lo demas...",
    1000: "El final de todo...."
  }
  texto = trivia.get(num,"Dato no creado....")
  
  return {"number":num,"text":texto}

def main():
  print("Elige un numero para saber un dato random (1, 2, 42 o 1000)")
  dato = int(input("-- Opcion: "))
  texto = trivia_fetch(dato)
  print(texto)



if __name__=="__main__":
  main()
