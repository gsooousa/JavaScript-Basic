//Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior = max(5,9);
console.log(valorMaior);

function max(numero1, numero2){
    if(numero1 > numero2)
        return numero1;
     return numero2;
}

//-------------------------------

let valorMaior2 = max(7,10);
console.log(valorMaior2);

function max(numero1, numero2){
    return numero1> numero2 ? numero1: numero2;
       
}