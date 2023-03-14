/*
2- Ingresar dos números
● Si el primero es mayor que el segundo mostrar en consola la suma de ambos
● Si el primero es menor que el segundo mostrar en consola la resta del segundo
menos el primero.
● Si son iguales mostrar en consola la multiplicación de ambos.
(ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3)
*/

let num1 = prompt('Ingrese el Primer Valor: '), num2 = prompt('Ingrese el Segundo Valor: '), operacion, nombreOperacion;

if(num1 > num2) {
    operacion = num1 + num2;
    nombreOperacion = 'Suma';
    
}else if (num1 < num2){
    operacion = num1 - num2;
    nombreOperacion = 'Resta';
}else if( num1 == num2){
    operacion = num1 * num2;
    nombreOperacion = 'Producto'
}

document.write(`Se realizo la operacion ${nombreOperacion} entre ${num1} y ${num2} y el resultado de esto es ${operacion}`);