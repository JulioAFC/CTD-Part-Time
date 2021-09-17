function fizzBuzz(n1, n2){
    for (let i= 1; i <= 100; i++){
    if(i%n1 == 0 && i%n2 == 0){
        console.log("Fizz");
    }
    else if(i%n2 == 0){
        console.log("Buzz");
    }
    else if(i%n1 && i%n2){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}
}
fizzBuzz(3, 5);