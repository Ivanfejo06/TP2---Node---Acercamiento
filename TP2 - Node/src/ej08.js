import axios from "axios";
import https from "https"; // Importa el módulo 'https'

const APIKEY = "a7d58067";
const Test = async (searchText) => {
    const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=cars`;
    const apiResponse = await axios.get(requestString, {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Ignora la validación del certificado SSL
    });
    return apiResponse.data;
};

let respuesta = await Test();
console.log('respuesta', respuesta);

const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};

// hacer la función
return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};

// hacer la función
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};
// hacer la función
return returnObject;
};
// hacer la función
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};