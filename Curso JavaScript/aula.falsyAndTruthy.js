
//Falsy-------------------------Todo os valores abaixo-------------------------------------
//undefined
//null
//0
//false
//''
//NaN - not a number
//----------------------------------------------------------------------------------------

//Truthy----------------Tudo que tem Valor-------------------------------------------------

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); // vai pegar o primeiro campo que estiver informação Truthy

//------------------------------------------------------------------------------------------