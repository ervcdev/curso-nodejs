const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

/* readableStream.on('data', function(chunk){
   data += chunk;
});

//saber cuando termina de leer el archivo
readableStream.on('end', function() {
   console.log('data');
}) */

// trabajar en la salia estandar del sistema, esribir en el fichero
// process.stdout.write("HOla ");
// process.stdout.write("nos ")

//convierte un stream de lectura y escritura
const Transform = stream.Transform;

function Mayus() {
   Transform.call(this);
}
util.inherits(Mayus, Transform)


Mayus.prototype._transform = function(chunk, codif,cb) {
   chunkMayus = chunk.toString().toUpperCase();
   this.push(chunkMayus);
   cb();

}


let mayus = new Mayus();
readableStream
   .pipe(mayus)
   .pipe(process.stdout);

