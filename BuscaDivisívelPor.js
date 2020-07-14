var array = [];
var num;
var resposta=[];

function buscarDivisivelPor(array, num){
  for(var i = 0; i < array.length; i++){
    if(array[i]%num == 0 && array[i]!=0){
      resposta = array[i];
      return resposta;
    }
  }
  return ("Nenhum número válido encontrado!");
}
