// if... else

//Se a hora estiver entre as 06:00 até 12:00: bom dia
//Se a hora estiver entre as 12:00 até 18:00 bom dia
//Caso contrario: Boa noite!


// if(condicao){
//     //codigo a ser executado
// }
// else if(outraCondicao){
//     // codigo a ser executado
// }
// else {
//     //codigo para ser executado
// }


//--------------------------------------

let hora = 10;

if(hora > 6 && hora < 12){
    console.log('Bom dia !')
} else if (hora > 12 && hora < 18){
    console.log('Boa tarde !')
} else {
    console.log('Boa noite !')
}
