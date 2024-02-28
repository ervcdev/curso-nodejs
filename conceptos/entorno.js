const process = require("process");

//accdediendo a las variables de entorno
let nombre = process.env.NOMBRE || 'Sin Nombre';
let git = process.env.GIT || "no hay nada";

console.log("hola " + nombre);
console.log('Mi git ' + git);
