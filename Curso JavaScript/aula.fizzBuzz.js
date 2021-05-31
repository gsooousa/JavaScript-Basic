
//fizzbuzz

// Se n é divisível por 3 e 5, substitua por “FizzBuzz”.
// Se n é divisível por 3, substitua por “Fizz”.
// Se n é divisível por 5, substitua por “Buzz”.
// Se n não é divisível nem por 3 nem por 5, apenas é dito n.


for(n = 1; n <=100; ++n){
    if(n % 3 === 0 && n % 5 === 0 ){
        console.log("FizzBuzz");
    }else if(n % 3 === 0){
        console.log("Fizz");
    }else if(n % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(n);
    }
 }
