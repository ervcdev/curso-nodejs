const {exec, spawn} = require('child_process');
const { stdout } = require('process'); //stadout salida principal estandar

//se utiliza cuanod se valla a trabajar con un scrtip quen no sea tan complicado
/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    } else {
        console.log(stdout);
    }
}) */


//se utiliza para cosas mas complejas
//invocar un proceso y ejecutar un solo proceso, se pasa en [] porque asi es la sintaxis
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid); //acceder al proceso del id
console.log(proceso.connected); //saber si esta conectado

//stdout se utiliza para que salga en la salidad estandar
proceso.stdout.on('data', function(dato) {
    console.log('El proceso esta muerto?');
    console.log(proceso.killed); //ver sie el proceso esta muerto
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('El proceso termino');
    console.log(proceso.killed);
})