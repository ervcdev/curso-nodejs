
//acceder a todo el sistema operativo
const os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.version());
console.log(os.userInfo());
console.log(os.constants);

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

/* console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

 */
console.log(gb(os.totalmem())); //ver el total de memoria displonible

console.log(os.homedir()); //ver el home donde estoy
console.log(os.tmpdir()); //ver la direccion de los archivos temporales
console.log(os.hostname()); //nombre de la maquina

console.log(os.networkInterfaces());

