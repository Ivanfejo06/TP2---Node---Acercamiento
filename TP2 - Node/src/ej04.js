import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {

    fs.readFile(origen, 'utf8', (error, data) => {
        if (error) {
            console.error("Error al leer el archivo de origen:", error);
            return;
        }

        fs.writeFile(destino, data, 'utf8', (error) => {
            if (error) {
                console.error("Error al escribir en el archivo de destino:", error);
                return;
            }
            console.log("El archivo se ha copiado exitosamente.");
        });
    });
}