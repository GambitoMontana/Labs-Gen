// Refer to Task 5 in your Instructions to complete this task

// Imaginemos que usuario ingresa el numero 10
let usrDato=10;
for (let i = 1; i <= usrDato; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log("FizzBuzzWoof");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
        console.log("FizzWoof");
    } else if (i % 5 === 0 && i % 7 === 0) {
        console.log("BuzzWoof");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 7 === 0) {
        console.log("Woof");
    } else {
        console.log(i);
    }
}

console.log("\n");

// Si queremos que el usuario solo imprima una linea especifica:
let i = usrDato;

if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("FizzBuzzWoof");
} else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
} else if (i % 3 === 0 && i % 7 === 0) {
    console.log("FizzWoof");
} else if (i % 5 === 0 && i % 7 === 0) {
    console.log("BuzzWoof");
} else if (i % 3 === 0) {
    console.log("Fizz");
} else if (i % 5 === 0) {
    console.log("Buzz");
} else if (i % 7 === 0) {
    console.log("Woof");
} else {
    console.log(i);
}
