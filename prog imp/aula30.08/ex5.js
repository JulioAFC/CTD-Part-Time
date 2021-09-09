//somar array
let numbs = [2,2,2,2,2]
function somarArray(){//           acumulador   número
    return console.log(numbs.reduce((total, currentElement) => total + currentElement));
}
somarArray();