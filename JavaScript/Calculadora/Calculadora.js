function operaciones(){
    
    // Ingresamos datos
    let a = Number(prompt("Digite el primer numero: "));
    let b = Number(prompt("Digite el segundo numero: "));
    let name = prompt("Cual es tu nombre?");

    // crear variables para las operaciones:
    let suma, resta, multiplicacion, division;

    // Realizamos las operaciones
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;

    // Imprimir datos:
    console.log("\nHola",name,"\nLa suma es:",suma,"\nLa resta es:",resta,"\nLa multiplicacion es:",multiplicacion,"\nLa division es:",division);
    
}

operaciones()