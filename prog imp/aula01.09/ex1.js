const alicia = [23, 67, 32]
const bob = [12, 67, 43]

let pontosA = 0;
let pontosB = 0;

function encontrarGanhador(a,b){
for(leti=0; i< alicia.length; i++){
    if(a[i] > b[i]){
        pontosA++;
    }
    else if(b[i] > a[i]){
        pontosB++;
    }
}
if(pontosA > pontosB){
    console.log("Alicia ganhou!")
}else if (pontosB > pontosA){
    console.log("Bob ganhou!")
}else{console.log("Empate!")}
}
econtrarGanhador(a,b);