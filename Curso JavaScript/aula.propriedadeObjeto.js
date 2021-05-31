// criar um metodo para ler propriedade de um objeto e exbir 
//somente as propriedades do string que estão nesse objeto.


const filme = {
    titulo : 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Iron-Man'
}
exibirPropriedades(filme);
    function exibirPropriedades(obj) {
       for ( prop in obj)
            if (typeof obj [prop] === 'string') {
               console.log(prop , obj[prop]);
        }
       }
       