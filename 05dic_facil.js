/* Challenge 05 de diciembre 2021 */

/* Descripción:
 Dado un entero x, devuelve verdadero si x es un entero palíndromo.
 Un número entero es un palíndromo cuando se lee lo mismo hacia atrás que hacia adelante. 
 Por ejemplo, 121 es palíndromo mientras que 123 no lo es.
 */

/*
 * Solución: 
    1. Convertirlo a string para evaluar caracter por caracter.
    2. Se evalúa con un for de 0 a (cadena.length/2), para que sea más óptimo en vez de recorrer toda la cadena.
    3. Se evalúa cada caracter con su contraparte (cadena.length - 1 - i)
    4. Pueden ocurrir dos cosas:
        a. Número de caracteres par: Se evalúan todos los caracteres.
        b. Número de caracteres impar: No se evalúa el que queda en medio pero es indiferente para el resultado.
 */
function verificarPalindromo(numero){
    var cadena = numero.toString();
    var esPalindromo = true;
    
    for(var i = 0; i < (cadena.length / 2); i++){
        if(cadena.charAt(i) != cadena.charAt(cadena.length - 1 - i)){
            esPalindromo = false;
            return esPalindromo;
        }
    }
    return esPalindromo; // sale del for con esPalindromo = true
}

console.log('**********Fácil**********');
var numero = 2028978202;
console.log('Input: ' + numero);
console.log('Output: ' + verificarPalindromo (numero));
