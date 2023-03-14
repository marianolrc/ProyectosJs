/*
4- Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad
que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio
sin decimales, es decir un entero: 2, 7, 90 etc.)
*/

let precio, cantidad, montoAbonado;

precio = parseInt(prompt('Ingrese el precio del producto'));
cantidad = parseInt(prompt('Ingrese la cantidad que se llevo el cliente'));

montoAbonado = precio * cantidad;

document.write(`El monto a abonar por el comprador es de $${montoAbonado}`);