//criar um app de frases motivacionais



/*---------Declaração da Função---------------*/
/*---------Function Statement---------------*/
function createPhrases() {
console.log('Estudar é muito bom')
console.log('Paciencia e persistencia');
console.log('Revisao é a mae do aprendizado');
}

//executar a função
//rodar, chamar, invocar
//execute ,  run, call, invoke

createPhrases( )


/*------------------------------------------------------*/
//Função anonima 
//Function anonymous / expression

//parametros (parameters)
const sum = function (number1, number2) {
  let total = number1 + number2
    return total
 }

let number1 = 34
let number2 = 26

console.log(`o numero1 é ${number1}`)
console.log(`o numero2 é ${number2}`)
console.log(`a soma total é ${sum(number1 , number2)}`)


/*------------------------------------------------------*/

//função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return 'suco de :' + fruta1 + fruta2
}
const copo = fazerSuco('laranja',' e maracuja')
console.log(copo);

/*------------------------------------------------------*/

//function Scopo
let subject = 'create video'

function crateThink(subject) {
  return subject  
}

console.log(subject)
console.log(crateThink(subject));

/*------------------------------------------------------*/

//arrow function 

const sayMyName = (name) => {
  console.log(name);
}

sayMyName('IronMan')

/*---------------------------------------------------------*/

//callback function
 function digaMeuNome(names){
   console.log('Antes de executar a função Callback');
  names()
  console.log('depois de executar a Callback');
 }

 digaMeuNome(
  ()=> {
    console.log('Estou na Callback');
  }
 )

 /*---------------------------------------------------------*/