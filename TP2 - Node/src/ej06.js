function parsearUrl(laURL){
    try {
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
    } catch (error) {
        console.error("Error al parsear la URL:", error);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}

let miUrl = null;
let miObjeto = null;

miUrl = '';
miObjeto = parsearUrl(miUrl);

console.log(miObjeto);