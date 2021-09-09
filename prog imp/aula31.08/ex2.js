//Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.
for(let i=1; i <= 100; i++){
    if(i % 2 == 1){
        console.log("Número: "+ i +" é ímpar" );
}};
//Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
for(let i=1; i <= 100; i++){
    if(i % 2 == 0){
        console.log("Número: "+ i + " é par");
}};
//Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
for(let i=1; i <= 100; i++){
    if(i % 2 == 0){
        console.log("Número: "+ i + " é par");
    }
    if(i % 2 == 1){
        console.log("Número: "+ i +" é ímpar" );
    }
}
//Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
let alunos = ( a = 1, a <=10 , a++);
//Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
while (alunos <=10){
    console.log("Nota do aluno nº "+ alunos + ": ");
    alunos ++
};
//Por fim, o programa mostra a média aritmética da turma.
let notas = [10,9,9,8,6,8,9,7,6,5];
function somarArray(){//           acumulador   número
    return console.log("A média aritmédica da turma é: " + notas.reduce((total, currentElement) => total + currentElement)/10);
}
somarArray();
