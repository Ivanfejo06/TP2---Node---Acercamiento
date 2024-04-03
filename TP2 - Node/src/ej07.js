import { getCurrency } from 'currency-map-country';
import { getCountry } from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'Argentina';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    if(getCountry(codigoPais) != undefined){
        let pais = getCountry(codigoPais)
        let moneda = getCurrency(pais.cur);
        return moneda.name;
    }
    else{
        return 'error';
    }
}