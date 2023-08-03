const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
                

//console.log(process.argv);
//const [ , , arg3 = 5] = process.argv;
//const [ , base = 5] = arg3.split('=');

//console.log(base);

//const base = 3;

/*
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
*/

//console.log(process.argv);//Procesos
//console.log(argv);//yargs

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then(nombreArchivo => console.log('Archivo Creado'.rainbow, 'creado'))
    .catch(err => console.log(err))

