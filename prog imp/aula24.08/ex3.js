//Exercício Pode Subir

function podeSubir(altura, acompanhada){
    if(altura >=1.40 && altura <=2){
        console.log("Acesso liberado.");
    }
    else if(altura >= 1.20 && altura <1.40 && acompanhada == true){
        console.log("Acesso autorizado somente com acompanhante.");
    }
    else{
        console.log("Acesso negado.");
    }
}
podeSubir(1.20, true)