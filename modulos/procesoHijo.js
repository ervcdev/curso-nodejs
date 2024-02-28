const {exec, spawn} = require('child_process');
const { stdout } = require('process'); //stadout salida principal estandar

/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    } else {
        console.log(stdout);
    }
}) */

//invocar un proceso y ejecutar un solo proceso
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('El proceso esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('El proceso termino');
    console.log(proceso.killed);
})