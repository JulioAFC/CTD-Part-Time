//filmes
const filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã","a vida é bela"];
//Os filmes devem estar todos em letras maiúsculas.
const maiusculas = filmes.map(filmes => filmes.toUpperCase());
console.log(maiusculas);

const animacao = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const double = filmes.concat(animacao);
console.log(double);

const semGame = double.pop();
console.log(semGame);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

var is_same = (asiaScores.length == euroScores.length) && asiaScores.every(function(element, index) {
    return element === euroScores[index]; 
});

console.log(is_same);
