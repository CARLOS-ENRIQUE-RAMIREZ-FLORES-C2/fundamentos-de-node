const fs = require('fs');
function leer(ruta, cb){
    fs.readFile(ruta, (error, data) => cb(data.toString()));
}
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, error => {
        error ? console.log('No se ha podido escribir...', error) : console.log('Escrito correctamente!!')
    })
}
function borrar(archivo, cb) {
    setTimeout(() => {
        fs.unlink(archivo, cb);
    }, 3000);
}
escribir(__dirname+'/archivo2.txt','Hola soy un archivo nuevo escrito con node JS', console.log);
leer(__dirname+'/archivo2.txt', console.log);
borrar(__dirname+'/archivo2.txt', console.log);
