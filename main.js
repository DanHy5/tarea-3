//EJERCICIO 1
let entrada = 7;
let Descuentoedad = 25;
let Descuentodia = 15;

let descuento1 = (Descuentoedad  * 7)/100;
let descuento2 = (Descuentodia * 7 )/100;

console.log("Descuento por edad: " +descuento1);
console.log("Descuento por dia: " + descuento2);

// EJERCICIO 2
let numero1 = prompt("ingrese un numero:");

if (numero1 <= 100 ){
    console.log("Rango normal");
}
else {
    if (numero1 => 101){
     console.log("rango ampliado");
    }
    if (numero1 > 1000)
    console.log("Rango fuera de limites ");
}
// EJERCICIO 3
let numero2 = prompt("Ingrese otro numero: ");

let raiz = sqrt(numero2);
let perfecto = raiz * raiz;

if ( perfecto== numero2){
    console.log("El numero es cuadrado perfecto");
}
else {
    console.log("El numero no es un cuadrado perfecto");
}

// EJERCICIO 4 

let dia = prompt("Ingrese un numero de 1-7: ");

switch (dia) {
    case 1: 
    console.log("LUNES");
        break;
    case 2: 
    console.log("MARTES");
        break;
    case 3: 
    console.log("MIERCOLES");
        break;
    case 4: 
    console.log("JUEVES");
        break
    case 5: 
    console.log("VIERNES");
        break;
    case 6: 
    console.log("SABADO");   
        break;
    case 7: 
    console.log("DOMINGO");    
        break;
}

// EJERCICIO 5
 let numero3 = prompt("ingrese un numero + o - : ");

 if (numero3 > 0){
    console.log("El numero es positivo");
 }
 if (numero3 < 0){
    console.log("el numero es negatico");
 }
 if (numero3 == 0){
    console.log("El numero el cero");
 }