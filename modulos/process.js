//como acceeder a todo el proceso de node y entender todo lo que pasa y entender señalo, eventos y escucharlos

//const process = require('process');
// proporciona información y control sobre el proceso actual en Node.js.

//antes de que todo termina y se cierre todo 
process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

//detecta justo cuando valla a slir del programa,
process.on('exit', () => {
    console.log('El proeceso acabo');
    setTimeout(() => {
        console.log('esto no se va a ver nunca');
    }, 0);
})

setTimeout(() => {
    console.log('esto si se va a ver poque esta en el mismo hilo');
}, 0);

//capturar una exepción 
process.on('uncaughtException', (err, origen) => {
    console.error('vaya se ha olvidado capturar un error');
    //console.log(err);
    setTimeout(() => {
        console.log('esto viene desde las excepciones');
    }, 0);
})


functionQueNoExiste();

console.log('Esto si el error no se recoje,no sale');

//process.on('uncaughtRejection') //promesas que se rechazaron






