/*
3- Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.
*/

let num1, num2, num3,num4, suma, producto;
num1 = parseInt(prompt('Ingrese el Primer valor'));
num2 = parseInt(prompt('Ingrese el Segundo valor'));
num3 = parseInt(prompt('Ingrese el Tercer valor'));
num4 = parseInt(prompt('Ingrese el Cuarto valor'));

suma = num1+num2+num3+num4;
producto = num1 * num2 * num3 * num4;

document.write(`El resultado de la suma es ${suma} y el resultado del producto es ${producto}`);
