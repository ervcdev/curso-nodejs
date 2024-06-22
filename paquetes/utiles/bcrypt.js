//es un paquete para cifrar passwords
const bcrypt = require('bcrypt');

const password = '12345Segura!';

//contaseña, numero de rondas a hashear
// se pasa primero la contraseña, el numero de rondas que va pasar numero de veces que ejecuta el algoritmo
//en la funcion se pasa primero el error y luego la clave haseada
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    //
    bcrypt.compare(password, hash, function(err, res){
        //console.log(err);
        console.log(res);
    });
});





