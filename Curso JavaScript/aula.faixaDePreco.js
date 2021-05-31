// Criar um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

//Primeira opção 
let faixas =[
    {tooltip: 'até R$700' , minimo: 0 ,maximo: 700},
    {tooltip: 'até R$700 até R$1000' , minimo: 700 ,maximo: 1000},
    {tooltip: 'R$1000 ou mais' , minimo: 1000 ,maximo: 9999999999},

]

//Segunda opção (Factory Function)
function criarFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }   
}

let faixa2 = [
    criarFaixaPreco('a', 1, 100),
    criarFaixaPreco('b', 100, 1000),
    criarFaixaPreco('c', 1000, 10000),
];

// terceira opção (Constructor function)
function FaixaPreco (tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa3 =[
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
];


// executar opções 1 / 2 /3
console.log(faixas);
console.log(faixa2);
console.log(faixa3);