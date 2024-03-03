//al colocar async esta se convierte en una funcion asincrona
async function hola(nombre, miCallback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("bla bla bla....");
      //resolve(nombre);
      resolve();
    });
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
  });
}

async function conversacion(nombre, veces, callback) {
  //recursividad
  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}


async function main(){
   let nombre  = await hola("shadow"); 
   await hablar();
   await hablar();
   await hablar();
   await hablar();
   await adios(nombre);
   console.log('terminando');
}
console.log("Empezando");
main();