//let buffer = Buffer.alloc(4);

//guardar en 
//let buffer = Buffer.from([1555,2,5,]);
console.log(buffer);

//let buffer = Buffer.from('Hola');

//console.log(buffer.toString());

//trabajar con el baffer posicion a posicion
let abc = Buffer.alloc(26);
console.log(abc);


for(let i=0; i < 26; i++){
    abc[i] = i + 97;
}

console.log(abc.toString());


let buffer = Buffer.alloc(1); // Creamos un buffer de 1 byte
buffer.writeUInt8(500, 0); // Intentamos escribir el valor 500 en el buffer
console.log(buffer); // Imprimimos el buffer

