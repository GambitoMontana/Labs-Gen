// Refer to Task 6 in your Instructions to complete this task

// Imaginemos que usuario ingresa el numero 10
let usrDato=10;
let arreglo=[];
let i=1;
for (let j = 0; j < usrDato; j++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        arreglo.push("FizzBuzzWoof");
    } else if (i % 3 === 0 && i % 5 === 0) {
        arreglo.push("FizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
        arreglo.push("FizzWoof");
    } else if (i % 5 === 0 && i % 7 === 0) {
        arreglo.push("BuzzWoof");
    } else if (i % 3 === 0) {
        arreglo.push("Fizz");
    } else if (i % 5 === 0) {
        arreglo.push("Buzz");
    } else if (i % 7 === 0) {
        arreglo.push("Woof");
    } else {
        arreglo.push(i);
    }
    i++;
}

for(let i=0;i<arreglo.length;i++) {
  console.log(arreglo[i]);
}

