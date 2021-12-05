/* Challenge 05 de diciembre 2021 */

/* Descripción:
 Dada una matriz entera nums, devuelve todos los números triples [nums [i], nums [j], nums [k]] tales que i! = J, i! = K, y j! = K, y nums [i] + nums [j] + nums [k] == 0.
 Observe que el conjunto de soluciones no debe contener números triples duplicados.
 */

function evaluarGrupos(nums){
    var indices = [];
    var resultado = [];
    console.log("resultado.length: "+ resultado.length);
    for(var i= 0; i < nums.length; i++){
        for(var j= 0; j < nums.length; j++){
            for(var k= 0; k < nums.length; k++){
                if(i != j && j != k && i!=k){  
                    var esValido = true;  
                    for(var m=0; m<indices.length;m++){
                        if(indices.length>0){
                            console.log("resultado.length: "+ indices.length)
                            if(indices[m] != undefined && indices[m] != null){
                                if(indices[m].includes(i) && indices[m].includes(j) && indices[m].includes(k)){
                                    esValido = false;
                                    //break;
                                }
                            }
                            if(resultado[m] != undefined && resultado[m] != null){
                                if(resultado[m].includes(nums[i]) && resultado[m].includes(nums[j]) && resultado[m].includes(nums[k])){
                                    esValido = false;
                                    //break;
                                }
                            }
                        }
                    }
                    if(esValido){
                        var suma = nums[i]+nums[j]+nums[k];
                        if(suma == 0){
                            indices.push([i,j,k]);
                            resultado.push([nums[i],nums[j],nums[k]]);
                        }
                    }
                }
            }
        }
    }
    return resultado;
}

console.log('**********Intermedio**********');
var nums = [-1,0,1,2,-1,-4];
console.log("Input: "+ nums);
var arrayResultado = evaluarGrupos(nums);

for(var h = 0; h<arrayResultado.length; h++){
    console.log(JSON.stringify(arrayResultado[h]));
}



