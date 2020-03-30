//let buffer =  Buffer.alloc(1);
//let buffer =  Buffer.from([1,2,3,4,4]);
//let buffer =  Buffer.from('hola');

//console.log(buffer.toString());

let abc =  Buffer.alloc(26);
console.log(abc)

for (let index = 0; index < 26; index++) {
    abc[index] = index + 97;
}
console.log(abc.toString());