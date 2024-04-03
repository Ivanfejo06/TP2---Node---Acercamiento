function parsearUrl(laURL){
    const miURL = new URL(laURL);
    const parametros = {};
    
    miURL.searchParams.forEach((value, key) => {
        parametros[key] = value;
    });

    return {
        host: miURL.origin,
        pathname: miURL.pathname,
        parametros: parametros
    };
}

let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);

console.log(miObjeto);