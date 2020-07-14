var prefixo = [];
var array = [];
var resultado = [];

function series(prefixo, array){
  for (var i = 0; i < array.length; i++){
    resultado[i] = prefixo + " " + array[i];
  }
  return resultado;   
}