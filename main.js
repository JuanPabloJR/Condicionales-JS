/*let age = prompt("Ingrese su edad",0);

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
*/
let calificacion = prompt("Ingresa una calificacion",0);

switch (true) {
 case calificacion < 8:
    console.log("No pasaste la parcial.");
    break;
 case calificacion >= 8 && calificacion < 11:
    console.log("Pasaste la parcial.");
    break;
 default:
    console.log("Calificacion invalida");
}
