const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log('CPUS: ',os.cpus().length);
//console.log(os.constants);
//console.log('RAM=>',os.freemem());
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE; }
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }
console.log('RAM=> KB ' ,kb(os.freemem()));
console.log('RAM=> MB ',mb(os.freemem()));
console.log('LIBRE RAM=> GB ',gb(os.freemem()));
console.log('TOTAL RAM=> GB ',gb(os.totalmem()));
console.log(os.homedir());
console.log(os.type());