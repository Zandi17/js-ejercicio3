window.alert ("Vamos a determinar el sueldo semanal por sus horas y el pago de hora de un trabajador.!")
var hora = parseInt(prompt("Ingresa cuantas horas trabajas"));
var pago = parseInt(prompt("Ingresa cuanto te paga por hora"));
var sueldoSemanal= hora * pago;
document.write ("Sueldo semanal es " + sueldoSemanal);