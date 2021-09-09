let a= [5, 8, 4, 9, 5];
let b= [8, 7, 8, 6, 8];
let c= [7, 5, 10, 8, 3];
function pontuacaoMedia(array){
    let soma = 0;
    for(let i=0; i<array.length;i++){
        soma= soma + array[i];
    }
    return soma/array.length;
}
console.log(pontuacaoMedia(c));

function pontuacaoMaior(array){
    let maior = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}
console.log(pontuacaoMaior(c));

function competicao(a, b, c){
    let mediaA = pontuacaoMedia(a);
    let maiorA = pontuacaoMaior(a);

    let mediaB = pontuacaoMedia(b);
    let maiorB = pontuacaoMaior(b);

    let mediaC = pontuacaoMedia(c);
    let maiorC = pontuacaoMaior(c);

    if(mediaA > mediaB && mediaA > mediaC){
        console.log("Na média o participante A ganhou!");
    }
    else if(mediaB > mediaA && mediaB > mediaC){
        console.log("Na media o participante B ganhou!");
    }
    else if (mediaC > mediaA && mediaC > mediaB){
        console.log("Na media o participante C ganhou!");
    }
    else{
        console.log("Não houve vencedor nessa modalidade (Empate)!");
    }

    if(maiorA > maiorB && maiorA > maiorC){
        console.log("No média o participante A ganhou!");
    }
    else if(maiorB > maiorA && maiorB > maiorC){
        console.log("No media o participante B ganhou!");
    }
    else if (maiorC > maiorA && maiorC > maiorB){
        console.log("No media o participante C ganhou!");
    }
    else{
        console.log("Não houve vencedor nessa modalidade (Empate)!");
    }
}
competicao(a, a, a);