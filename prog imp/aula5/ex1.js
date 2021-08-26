/*Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.*/
function converta(p){
    return p * 2.54 + " centímetros"
};
console.log(converta(10))

/*Crie uma função que receba uma string e a converta em um URL.*/
function site(a){
    return "www."+ a + ".com.br"
};
console.log(site("meusite"));

/*Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).*/ 
function exclamação(b){
    return b + "!"
};
console.log(exclamação("Viva"));
/*Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.*/
function dogAge(c){
    return c + " anos humanos, são equivalentes a "+ c * 7 + " anos caninos."
};
console.log(dogAge(10));
/*Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.*/
function hTrab(h){
    return "Horas trabalhadas: "+ h + " -> Totalizando um valor de salário mensal de " + h * 160 + " reais."
};
console.log(hTrab(30));
/*Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
Em seguida, execute a função, testando diferentes valores.*/
let altura = 1.73;
let peso = 75;
function calculoImc(){
    return "Seu IMC corresponde a "+ [peso / (altura * altura)] + " kg/m²."
};
console.log(calculoImc());
