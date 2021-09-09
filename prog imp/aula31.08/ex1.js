//1- crie um for que se repita por 5 vezes
for (let i=0; i < 5; i++){
    console.log((i+1) + " - "+ "Olá mundo");
}
//contando números ímpares. for de 1 a 10
for(let i=1; i <= 10; i++){
    /*if(i % 2 == 0){
        console.log("Número: "+ i + " é par");
    }*/
    if(i % 2 == 1){
        console.log("Número: "+ i +" é ímpar" );
    }
}
//TABUADA DE 1 A 10
for (let unidade = 1; unidade <=10; unidade ++){
    console.log('Operação do',unidade +':');
    for(let uni2=1; uni2 <=10; uni2 ++){
        console.log(unidade,'x',uni2,'=', unidade*uni2);
    }console.log ('\n');
}