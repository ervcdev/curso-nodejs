function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("bla bla bla....");
    callbackHablar();
  });
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  //recursividad
  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}
//

console.log("Iniciando proceso......");
hola("shadow", function(nombre){
  conversacion(nombre, 4 , function(){
    console.log('proceso terminado');
  })
} )
/* hola("shadow", function (nombre) {
  adios(nombre, function () {
    console.log("Terminamos");
  });
});


 */
/* hola("Ervin", function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        adios(nombre, function () {
          console.log("terminando proceso");
        });
      });
    });
  });
});
 */
