
// var 
var clima = "Quente"
clima = "Frio"  //reatribuição de valor

// const 
const climas = "quente"
climas = "frio"


console.log(clima);
console.log(climas);

/*---------------------------------------------------------------------------------*/

let teste =''
let testee = 0
let testeee = true

console.log(typeof teste); // vai imprimir o tipo da varivel.
console.log(typeof testee); // vai imprimir o tipo da varivel.
console.log(typeof testeee); // vai imprimir o tipo da varivel.

/*---------------------------------------------------------------------------------*/


let xpto = true //boolean
clima = "" // virou string 
console.log(typeof xpto)


/*---------------------------------------------------------------------------------*/

//SCOPE
// Block statement 

{
let y = 0
console.log(y);
}

//----------------------------var é global e local   ------------- hoisting

console.log('existe x antes do bloco ?' , x);

{
    var x = 0 
}

console.log('existe x depois do bloco ? ', x);

// const e let são locais e só funcionam no escopo onde foi criada

console.log('existe xx e yy antes do bloco ' , xx , yy);
{
    let yy = 0
    const xx = 0
    console.log('escopo local', xx,yy);
}

console.log('existe xx e yy antes do bloco ' , xx , yy);
/*---------------------------------------------------------------------------------*/














