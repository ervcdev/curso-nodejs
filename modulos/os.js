
//acceder a todo el sistema operativo
const os = require("os");
console.log(os.arch()); //ver la arquitectura
console.log(os.platform()); // ver si estamos en linuz, android, windows, mac, etc
console.log(os.cpus().length); //informacion de las cpus
console.log(os.version());
console.log(os.userInfo());
console.log(os.constants); //errores y señales del sistema

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.freemem()); //ver la memoria libre
console.log(kb(os.freemem())); //ver la memoria libre en kb
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

 
console.log(gb(os.totalmem())); //ver el total de memoria displonible

console.log(os.homedir()); //ver el home donde estoy
console.log(os.tmpdir()); //ver la direccion de los archivos temporales
console.log(os.hostname()); //nombre de la maquina

console.log(os.networkInterfaces());

