var personagens = [];
var filmes = [];
var lancamentos = [];
var id = 1;

function filme(personagens,filmes,lancamentos,id){
  if (id <= personagens.length && id > 0){
    id = id - 1;
    return (personagens[id] + " é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id] + ".")
  }
  else{
    return ("Essa não é uma opção válida.");
  }
}