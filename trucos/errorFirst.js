
/** MUESTRA LOS ERRORES DENTRO DE LA FUNCION ASINCRONA */
function asincrona(callback) { 
    setTimeout( () => {
        try {
            let a  = 4 + x;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    },1000)
 }
asincrona( (err, dato) => {
    if(err){
        console.error('TENEMOS UN ERROR');
        console.error(err);
        return false;
        //throw err;
    }
});