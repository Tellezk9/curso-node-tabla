const fileSystem = require('fs');

const crearArchivo = async(base, listar) => {
    try {
        console.log(`Tabla del  ${base}`);
        salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        listar ? console.log(salida):null;

        fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`tabla-${base} creada`);
    } catch (err) {
        throw err
    }
}
module.exports = {
    crearArchivo
}