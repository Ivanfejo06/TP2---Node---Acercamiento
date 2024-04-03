import {PI, sumar, multiplicar} from './modules/matematicas.js';

let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); 

total = sumar(numero1, numero2); 
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);