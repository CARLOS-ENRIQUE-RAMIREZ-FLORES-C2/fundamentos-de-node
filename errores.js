function rompe(){
    return 4 + c;
}

try {
    rompe();
} catch (error) {
    console.error('Algo no salio bien!!! ',error.message);
}
