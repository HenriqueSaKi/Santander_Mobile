var array = [];
var num;
var resposta = [];
var count = 0;

function maiorQueNum(array, num){
  for (var i = 0; i < array.length; i++){
    if(array[i] > num){
      resposta.push(array[i]);
    }
  }
  return resposta;
}