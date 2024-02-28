function otraFunction() {
  serompe();
}

function serompe() {
  return 2 + w;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    //toca colocar el trycatch ya que esta se ejecuta en otro hilo
    try {
      return 3 + p;
    } catch (err) {
      console.error("error en el function asincrona");
      cb(err);
    }
  });
}
try {
  //otraFunction();
  seRompeAsincrona(function (err) {
    console.log(err.message);
  });
} catch (error) {
  console.error("algo se ha roto");
  console.error(error);
  console.log("no pasa nada lo hemos capturado");
}

console.log("Esto de aqui esta al final");
