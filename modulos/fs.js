const fs = require('fs');

// leer archivo del sistema, se le pasa la ruta del archivo y un callback
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        //leido
        cb(data.toString()); //convierte el buffer a estring
    })
}

leer(__dirname + '/archivo.txt', console.log);

//escribir archivo en el sistema
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No se pudo escribir', err);
        }else {
            console.log('Se ha escrito correctamente');
        }
    });

}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo de prueba', console.log);

leer(__dirname + '/archivo1.txt', console.log);


//borrar un archivo
function borrar(ruta, cb){
    //unlink deslinka los nodos que se an creado
    fs.unlink(ruta, cb);

}

borrar(__dirname + '/archivo1.txt', console.log)