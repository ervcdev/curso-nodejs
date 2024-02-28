//
//let buffer = Buffer.alloc(4);

//guardar en 
//let buffer = Buffer.from([1,2,5,]);

let buffer = Buffer.from('Hola');

//console.log(buffer.toString());

//trabajar con el baffer posicion a posicion
let abc = Buffer.alloc(26);
console.log(abc);


for(let i=0; i < 26; i++){
    abc[i] = i + 97;
}

console.log(abc.toString());