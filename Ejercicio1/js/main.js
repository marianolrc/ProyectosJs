/*1- La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes
presentarse de una manera más interactiva y eficiente , por eso deciden acudir a un
programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad
favorita y deporte favorito en una tarjeta de presentación predeterminada.*/


let nombre,edad, actividadFav, deporteFav;
nombre = prompt('Ingrese su nombre: ');
edad= prompt('Ingrese su edad: ');
actividadFav = prompt('ingrese su actividad Favorita: ');
deporteFav= prompt('Ingrese su deporte favorito: ');

document.write(`Hola a todos mi nombre es ${nombre}, tengo ${edad} años, mi actividad favorita es ${actividadFav} y mi deporte favorito es ${deporteFav} `)