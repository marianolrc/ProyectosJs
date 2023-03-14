/*
5- Ingresar 3 números
● indicar cual es el mayor
● indicar cual es el menor
● obtener la raíz cuadrada del segundo número
*/

let num1,num2,num3, raiz, medio, mayor, menor;
num1 = parseInt(prompt('Ingrese el Primer Valor'));
num2 = parseInt(prompt('Ingrese el Segundo Valor'));
num3 = parseInt(prompt('Ingrese el Tercer Valor'));

if(num1 > num2){
    medio = num1;
}else{
    medio = num2;
}
if(medio > num3){
    mayor = medio;
}else{
    mayor = num3;
}

if(num1 < num2){
    medio = num1;
}else{
    medio = num2;
}
if(medio < num3){
    menor = medio;
}else{
    menor = num3;
}

raiz = Math.sqrt(num2);

document.write(`El mayor entre los numeros ${num1}, ${num2} y ${num3} es ${mayor}, el menor es ${menor}, y la raiz  cuadrada de ${num2} es ${raiz}`);

