const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./config/yargs");
// const listar = require('yargs').option

console.clear();
console.log("yargs", argv);
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');
// console.log(base);



base = argv.b;
listar = argv.l;
crearArchivo(base,listar)
// .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch(err => console.log(err))