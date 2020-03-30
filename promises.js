function hola(n) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            log('Hola '+n)
            resolve(n);
        },1000) 
    })

}
function hablar(n) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            log('BLA bla BLA');  
            resolve(n);  
        }, 1000);
    })
}

function adios(n) { 
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            log('Hemos terminado de ejecutar el proceso mi compa ' + n);  
            resolve(n);  
        }, 1000);

    })
}

function log(str) {
    console.log(str);
}
log('Inciando proceso');
hola('carlos')
    .then(hablar)
    .then(adios)
    .then((n) => log(n +'! Proceso terminado'))
    .catch( e => {
        log('Compa ocurrio un error!!!');
        console.log(e);
    } )