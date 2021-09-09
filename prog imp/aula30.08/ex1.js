let compras = ['arroz', 'feijão', 'carne', 'batata', 'sobremesa'];

console.log( 'O método Join realiza a separação das strings dentro do array.');
console.log(compras.join(' - '));

console.log('O método pop remove o último elemento de um array e retorna aquele elemento.');
console.log(compras.pop());

console.log('O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.');
console.log(compras.push('sorvete', 'café'));

console.log ('O método shift remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.');
console.log(compras.shift());

console.log ('O método unshift adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.');
console.log(compras.unshift('chocolate', 'banana'));