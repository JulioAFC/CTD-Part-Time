//Microondas

/*Grupo: Julio Campos, Gustavo Muraro, Peterson Alves, Ronan Junqueira, David Franklin, Luis Soares, Israel.*/
function microondas(opcao, tempo){
    console.log("\nEste é o nosso menu:\n")
    console.log("1 - Pipoca: 10 segundos")
    console.log("2 - Macarrão: 8 segundos")
    console.log("3 - Carne: 15 segundos")
    console.log("4 - Feijão: 12 segundos")
    console.log("5 - Brigadeiro: 8 segundos\n")
    switch(opcao){
        case 1: //Pipoca-10s
            if(tempo > 20){
                console.log("A comida queimou!!!")
            }else if(tempo < 10){
                console.log("Tempo insuficiente")
            }else if(tempo > 30){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 2: //Macarrao-8s
            if(tempo > 16){
                console.log("A comida queimou!!!")
            }else if(tempo < 8){
                console.log("Tempo insuficiente")
            }else if(tempo > 24){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 3: //Carne-15s
            if(tempo > 30){
                console.log("A comida queimou!!!")
            }else if(tempo < 15){
                console.log("Tempo insuficiente")
            }else if(tempo > 45){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 4: //Feijao-12s
            if(tempo > 24){
                console.log("A comida queimou!!!")
            }else if(tempo < 12){
                console.log("Tempo insuficiente")
            }else if(tempo > 36){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
        case 5: //Brigadeiro-8s
            if(tempo > 16){
                console.log("A comida queimou!!!")
            }else if(tempo < 8){
                console.log("Tempo insuficiente")
            }else if(tempo > 24){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Prato pronto, bom apetite")
            }
            break;
            default: //Nenhuma das opções
            console.log("Opção inválida!!!")
            break;
            }
            }
      
        // teste pipoca 15s
        microondas(2, 17)
       