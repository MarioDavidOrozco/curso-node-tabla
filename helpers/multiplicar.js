const fs = require('fs');

const crearArchivo = async(base = 5, hasta = 10, listar = false) => {
    console.clear();

    let salida = '';
    for(let i = 1; i <= hasta; i++){
        salida += `${base} x ${i} = ${base * i} \n`;
    }

    if(listar){
        console.log(`TABLA DEL ${base}`);
        console.log(salida);
    }else{
        fs.writeFile(`./salida/Tabla del ${base}.txt`, salida, (err) => {
            if(err) throw err;
            return 'Archivo Guardado';
        });

        //Alternativa a fileWrite
        //fs.writeFile('Tabla del 5.txt', salida);
        //console.log('Archivo Guardado');
    }
}

module.exports = {
    crearArchivo
}