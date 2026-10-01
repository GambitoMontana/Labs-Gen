let productos = ["labial", "rimel", "base"];
let producto = {nombre: "Labial", precio: 100, disponible: true};
console.log(mostrarProducto(productos[0],producto["precio"]));
function mostrarProducto(nombre, precio) {return nombre+" cuesta $"+precio;}