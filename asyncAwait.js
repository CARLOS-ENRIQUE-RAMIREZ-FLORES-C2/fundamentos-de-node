async function hola(n) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            log('Hola '+n)
            resolve(n);
        },1000) 
    })

}
async function hablar(n) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            log('BLA bla BLA');  
            resolve(n);  
        }, 1000);
    })
}

async function adios(n) { 
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
async function main(){
    await hola('Carlos Enrique');
    await hablar();
    await hablar();
    await hablar();
    await adios('Carlos Enrique');
    log('TERMINO...');
}
log('Iniciamos el proceso')
main();
log('Terminamos el proceso en teoria');