import requests

def trivia_fetch(num):

  url = f"https://opentdb.com/api.php?amount={num}"
  response = requests.get(url)
  trivia = response.json()
  
  return trivia

def main():
  cantidad=int(input("Elige, cuantas preguntas quieres obtener\n --Opcion: "))

  trivia = trivia_fetch(cantidad)
  print(trivia)

if __name__=="__main__":
  main()

  """
  trivia ={
    1: "La Tierra es el único planeta del Sistema Solar que posee una sola luna",
    2: "En el mundo hay por lo menos 2 personas identicas, tú y tu Doppelganger",
    45: "El significado de la vida, del universo y todo lo demas...",
    1000: "El final de todo...."
  }
  """