console.log('Criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo:')
let codigo = [10,11,12,13,14,15];
function imprimirInverso(){
    let imprimirInverso = [15,14,13,12,11,10]
    return console.log('imprimirInverso = ' + imprimirInverso)
}
imprimirInverso();
console.log('--------------------------------------------');
console.log('Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.');
let numb = [1,2,3,4,5];
function inverter(){
    inverter = numb.reverse()
    return console.log('A função inverter retornou o array numb de forma inversa = '+ inverter);
}
inverter();