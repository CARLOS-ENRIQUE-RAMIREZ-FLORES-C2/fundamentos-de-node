const fs =  require('fs');
const stream =  require('stream');
const ultil = require('util');
let data = '';

let readableStream = fs.createReadStream(__dirname + '/file.txt');
readableStream.setEncoding('UTF8');
/*readableStream.on('data', (chunk) =>{
    console.log(chunk);
})
process.stdout.write('HOLA');
process.stdout.write('como');
process.stdout.write('ESTAS');
*/

const Transform = stream.Transform;

function Mayus() { Transform.call(this) }
ultil.inherits(Mayus, Transform);

Mayus.prototype._transform = (chunk, codif ,cb) => {
    chunkMayus = chunk.toString().toUpperCase();
    console.log(chunkMayus);
    this.push(chunkMayus);
    cb();
} 

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);
