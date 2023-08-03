const argv = require('yargs')
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Número hasta el que se multiplicará'
                })
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,//Requiere un argumento forzoso
                    describe: 'Es la base de la tabla de múltiplicar'
                })
                .check((argv, options) => {
                    if(isNaN(argv.base)){
                        throw 'La base tiene que se un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;