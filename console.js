console.log('Algo');
console.info('info');
console.error('error');
console.warn('warn');

const table = [
    {
        nombre: 'Carlos Enrique',
        apellidos: 'Ramírez Flores',
        edad: '31 años',
        sexo: 'Hombre',
        profesion: 'Informática'
    },
    {
        nombre: 'Lucia',
        apellidos: 'Robles Torres',
        edad: '32 años',
        sexo: 'Mujer',
        profesion: 'Medico'
    }
]
console.table(table);


// console.group() & console.groupEnd()
    // Agrupa una cantidad de datos en consola
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves",
    "Viernes", "Sábado", "Domingo"];
    
console.group("diasSemana")
for (let i = 0; i < dias.length; i++) {
console.log(dias[i]);
};
console.groupEnd("diasSemana")

// console.clear()
// Límpia la consola
function limpiarConsola () {
    setTimeout(() => {
        console.clear("Limpiando cada 5 segs");
    }, 10000)
}
limpiarConsola();

// console.count() & console.countReset()
// Cuenta la cantidad de veces que se ejecuta algo
console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
console.count("Veces");

// console.time() & console.timeEnd()
// determina el tiempo que demora un proceso en ocurrir
console.time("100-elementos")
for (let i = 0; i < 100; i++){
};
console.timeEnd("100-elementos")