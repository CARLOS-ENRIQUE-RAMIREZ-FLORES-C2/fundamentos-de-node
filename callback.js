function hola(n, f) {
    setTimeout( () => {
        log('Hola '+n)
        f(n);
    },1000) 

}
function adios(n, fun) { 
    setTimeout(() => {
        log('Adios '+ n)
        fun();
    }, 1000);
 }
function log(str) {
    console.log(str);
}


hola('Carlos Enrique ', (nombre) => {
    adios(nombre, () => log('Terminamos...'))
});