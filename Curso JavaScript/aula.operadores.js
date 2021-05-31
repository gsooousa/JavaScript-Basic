// opedores de atribuição 
let valorTecladoGamer = 100;
console.log(valorTecladoGamer);
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);

// operadores de igualdade
//igualdade estrita - Compara os valores e tipo.
console.log(1===1);
console.log('1' ===1);

//igualdade solta - só compara valores;
console.log(1==1);
console.log('1'==1)


//Operador Ternario
//tem um cliente, um cliente que tem mais de 100 pontos é premium, caso tenha menos é um cliente comum 

let pontos = 101;
let tipo = pontos > 100? 'premium' : 'comum';
console.log(tipo)


//Operador Logicos --- E (&&)
//Retorna TRUE se os dois operadores forem True

console.log(true && true);  //quando as duas condições forem iguais ele retorna True
console.log(false && true); // vai retornar false, pois existe condições diferentes

//exemplo &&
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeTrabalhar = maiorDeIdade && possuiCarteiraDeTrabalho; // dessa forma podemos identificar que os dois sendo true ele pode trabalhar.
console.log(podeTrabalhar);  

//exemplo && 2 
let maiorDeIdade1 = false;
let possuiCarteiraDeTrabalho1 = true;
let podeTrabalhar1 = maiorDeIdade1 && possuiCarteiraDeTrabalho1; // dessa forma podemos identificar que se um deles for false não estara apto a trabalhar.
console.log(podeTrabalhar1);  

// Operadores Logicos ----- Ou  ||
//Retornar True se um dos operando forem True

//exemplo || 
let maiorDeIdade2= false;
let possuiCarteiraDeTrabalho2 = true;
let podeTrabalhar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2; // dessa forma podemos identificar que se um deles for true, ele vai retornar true
console.log(podeTrabalhar2);  

//exemplo || 2
let maiorDeIdade3= false;
let possuiCarteiraDeTrabalho3 = false;
let podeTrabalhar3 = maiorDeIdade3 || possuiCarteiraDeTrabalho3; // dessa forma podemos identificar que se os dois forem false ele retorna false.
console.log(podeTrabalhar3);  

//Operador Logico ---- NOT ! 
// faz uma negação

// exemplo !
let maiorDeIdade4= false;
let possuiCarteiraDeTrabalho4 = true;
let podeTrabalhar4 = maiorDeIdade4 || possuiCarteiraDeTrabalho4; 
console.log(podeTrabalhar4);  

let candidatoRecusado = !podeTrabalhar4;

console.log(candidatoRecusado); // dessa forma podemos identificar se o candidato pode trabalhar ou nao 'faz uma negação' | neste caso vai dar false pois ele pode trabalhar ele atende os requisitos.

// exemplo ! 2
let maiorDeIdade5= false;
let possuiCarteiraDeTrabalho5 = false;
let podeTrabalhar5 = maiorDeIdade5 || possuiCarteiraDeTrabalho5; 
console.log(podeTrabalhar5);  

let candidatoRecusado5 = !podeTrabalhar5;

console.log(candidatoRecusado5); // dessa forma podemos identificar se o candidato pode trabalhar ou nao , neste caso vai dar true porque ele esta recusado, não pode trabalhar.

//---------------------------------------------------------------------------------------
