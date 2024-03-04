//moduloas globales del cor


let i = 0;
let interval = setInterval(function() {
    console.log('Hola');
    if(i === 3) {
        clearInterval(interval);
    }
    i++;
},1000);

//ejecuta inmeditamente
setImmediate(function() {
    console.log('hola1');
})

console.log(process);
console.log(__dirname);

//creacion de varibla global
global.miVariable = "elValor";
console.log(miVariable);
