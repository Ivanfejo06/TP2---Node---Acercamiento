
let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;

textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1,texto2)
{
    let texto3 = texto2 + texto1;
    let arrayRevertido = texto3.split('').reverse();
    let returnValue = arrayRevertido.join('');
    return returnValue;
}