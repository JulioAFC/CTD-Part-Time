/*Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz.*/
let frase = "Eu quero converter esse texto em maiúsculas!"

function converter(){
    return frase.toUpperCase();
};
console.log(converter());
/*Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.*/
let para = "Meu número é 10!"

function detectar(){
    return typeof(para);
};
console.log(detectar());
/*Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.*/
let raio = 3

function circle(raio){
    return 2 * Math.PI * raio + " cm é o cumprimento da circunferência de raio = " + raio + " cm." 
};
console.log(circle(raio));
