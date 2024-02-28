//moduloas globales del cor


let i = 0;
let interval = setInterval(function() {
    console.log('Hola');
    if(i === 3) {
        clearInterval(interval);
    }
    i++;
},1000);


setImmediate(function() {
    console.log('hola1');
})

console.log(process);

//variables globales en caso de requerirlas
global.miVariable = "elValor";
console.log(miVariable);
