/*criar função: adicionar, subtração, multiplicação, divisão
PROPOSITALMENTE criadas em conjunto, para operarem de fato como uma calculadora!*/

function calcular (numA, numB, operacao){
    if (operacao=='+'){return numA + numB;}
    if (operacao=='-'){return numA - numB;}
    if (operacao =='*'){return numA * numB;}
    if (operacao =='/' && numB!=0){return numA / numB;}
    else{
        return "Impossível dividir!";
    }
};
console.log ("-------------- Teste de Operações / Calculadora --------------");
/*testando as operações da calculadora, programadas na função*/

/*Soma*/
let resultadoA = calcular (10,5,'+');
console.log('Resultado da soma = '+ resultadoA);

/*Subtração*/
let resultadoB = calcular (10,5,'-');
console.log('Resultado da subtração = '+ resultadoB);

/*Multiplicação*/
let resultadoC = calcular (10,5,'*');
console.log('Resultado da multiplicação = '+ resultadoC);

/*Subtração*/
let resultadoD = calcular (10,5,'/');
console.log('Resultado da divisão = '+ resultadoD);

/*Subtração com número 0*/
let resultadoE = calcular (10,0,'/');
console.log('Resultado da divisão por 0 = '+ resultadoE);

/*Testes avançados*/
console.log ("-------------- Testes avançados de Operações / Calculadora --------------");
/*Número ao quadrado*/

function quadradoDoNumero(numC){
	return (Math.pow(numC,2));
};
let resultadoAvancadoUm = quadradoDoNumero(4)
console.log('Resultado do quadrado do número = ' + resultadoAvancadoUm);

/*Média de Três Números*/
function mediaDeTresNumeros(numD, numE, numF, media){
	return media = (numD + numE + numF)/3	
};
let resultadoAvancadoDois = mediaDeTresNumeros(2,2,2)
console.log ('Resultado da média de três números = ' + resultadoAvancadoDois);

/*Calcula Porcentagem*/
function calculaPorcentagem(numG, numH){
	return totalPorcentagem = (numG * numH/100)
};
let resultadoAvancadoTres = calculaPorcentagem(50,30)
console.log('Resultado do cálculo da porcentagem = ' + resultadoAvancadoTres + '%');

/*Gerador de Procentagem*/
function geradorDePorcentagem(numI, numJ){
	return totalPorcentagem = ((numI *100) / numJ)
};
let totalGerador = geradorDePorcentagem(77,100)
console.log('Resultado do gerador de porcentagem = ' + totalGerador + '%');