//Criar função para mostrar numero primo

//Um numero só é primo se for divido por 1 e por ele mesmo.

exibirNumeroPrimo(100);

function exibirNumeroPrimo(limite) {

    for (let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;
        for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0 ) {
            ehPrimo = false;
            break
        }
        
        }
        if (ehPrimo) console.log(numero);
    }   
}