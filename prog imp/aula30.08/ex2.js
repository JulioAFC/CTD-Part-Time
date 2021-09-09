let marcas = ['nike', 'adidas', 'nike sb', 'element', 'mcd'];

//Acessar elementos específicos de um array.
console.log('Acessar elementos específicos de um array:');
console.log(marcas[0]);
console.log(marcas[1]);
console.log(marcas[2]);
console.log(marcas[3]);
console.log(marcas[4]);

console.log('--------------------------------------------');
//Modificar cada um dos elementos de um array e imprimi-los no console.
console.log('Modificar cada um dos elementos de um array e imprimi-los no console:')
function inverter (marcas){
    let inverter = ['element', 'nike', 'mcd', 'adidas', 'nike sb']
    return console.log('inverter = ' + inverter)
}
inverter();
console.log('--------------------------------------------');
//Adicionar elementos a um array.
console.log('Adicionar elementos ao início de um array:');
function noInicio(){
    noInicio = marcas.unshift('quicksilver')
    return console.log('No início = '+ noInicio + ' elementos ' + '/ Array atualizado = '+ 'quicksilver, nike, adidas, nike sb, element, mcd');
}
noInicio();
console.log('--------------------------------------------');
console.log('Adicionar elementos ao final de um array:');
function noFinal(){
    noFinal = marcas.push('oakley')
    return console.log('No final = '+ noFinal + ' elementos ' + '/ Array atualizado = '+ 'quicksilver, nike, adidas, nike sb, element, mcd, oakley');
}
noFinal();
console.log('--------------------------------------------');
//Extrair elementos de um array.
console.log('Extrair elementos de um array:');
function extrair(){
    extrair = marcas.slice(2,6)
    return console.log('marcas extraídas = ' + extrair);
}
extrair();
console.log('--------------------------------------------');
//Comparar elementos de um array com os elementos de outro. 
console.log('Comparar elementos de um array com os elementos de outro:');
let jogo = [5, 15, 25, 35, 45, 55];
let sorteio = [9, 15, 16, 21, 35, 49];
let acertos = [];
//Verificar se cada número jogado está na lista dos sorteados
for(let i=0; i<jogo.length; i++){
    if(sorteio.indexOf(jogo[i])> -1){
        acertos.push(jogo[i]);
    }
}
console.log('Você acertou ' + acertos.length + ' números: ', acertos);
console.log('--------------------------------------------');