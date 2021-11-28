/* Challenge 28 de noviembre 2021 */

/* Descripción:
 * Se le da un entero grande representado como una matriz de dígitos de números enteros, donde cada digito[i] es el i-ésimo dígito del número entero. 
 * Los dígitos están ordenados del más significativo al menos significativo en orden de izquierda a derecha. 
 * El entero grande no contiene ceros a la izquierda.
 * Incrementa el entero grande en uno y devuelve la matriz de dígitos resultante.
 */

/*
 * Primera solución: Convertir la entrada a número,  
 * incrementar en uno y volver a mostrar la respuesta como array
 */
console.log('**********Fácil**********');
console.log('-1ra. solución-');
var numero = [9,9,9,9];
console.log('entrada: ' + numero);
var nuevo = Number(numero.join(''));
nuevo +=1;
numero = nuevo.toString().split('');
console.log('salida: ' + numero);

/*
 * Segunda solución: Trabajar el incremento en el mismo array
 */
console.log('-2da. solución-');
numero = [9];
console.log('entrada: ' + numero);

function incrementar(){
    let i = numero.length - 1;
    do{
        if(numero[i] <= 8){
            numero[i] += 1;
            break;
        }else{
            numero[i] = 0;
            i == 0 ? numero.unshift(1) : this.continue;
        }
        i--;
    }while(i >= 0);
}
incrementar();
console.log('salida: ' + numero);

/* Descripción:
 * Dada una cadena que contiene dígitos del 2 al 9, devuelve todas las combinaciones de letras posibles que el número podría representar. 
 * Devuelve la respuesta en cualquier orden.
 * A continuación se muestra un mapeo de dígitos a letras (como en los botones del teléfono). 
 * Tenga en cuenta que 1 no se asigna a ninguna letra. * 
*/

/* Solución: Se especifica cuáles letras corresponden a cada dígito, utilizando Map para obtener la lista de clave-valor
 *
 */
console.log('**********Intermedio**********');
const mapeo = new Map([
    ["2", ["a","b","c"]],
    ["3", ["d","e","f"]],
    ["4", ["g","h","i"]],
    ["5", ["j","k","l"]],
    ["6", ["m","n","o"]],
    ["7", ["p","q","r","s"]],
    ["8", ["t","u","v"]],
    ["9", ["w","x","y","z"]]
  ]);

var entrada = "23";
function combinar(){
    for(const x in mapeo.get(entrada.charAt(0))){
        for(let i = 1; i < entrada.length; i++){
            
            
        }        
    }    
}