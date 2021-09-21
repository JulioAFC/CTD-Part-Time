//map
let pares = [2, 4, 6, 8, 10];

let impares = pares.map(function(num){
    return num + 1;
});
console.log(impares);

//filter
let nomes = ['Maria', 'José', 'João', 'Camila', 'Maria'];

let nomesMaria = nomes.filter(function(nome, indice){
    return nome =='Maria';
});
console.log(nomesMaria);

//reduce
let numeros = [1, 5, 9, 3, 7];

let numerosFormatados = numeros.reduce(function(acumulador, numeros){
    return acumulador +'-' + numeros;
});
console.log(numerosFormatados);

//forEach
let animais = ['cachorro', 'tigre', 'leão', 'águia', 'orca'];

let animaisNome = animais.forEach(function(animal){
    console.log("O nome do animal é " + animal);
});
console.log(animaisNome);