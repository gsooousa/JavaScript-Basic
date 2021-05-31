//For-In

const pessoa = {
    nome: 'Guilherme',
    idade: 25,
    altura: 1.70
};

//key-value
for(let chave in pessoa){
    console.log(chave);
}

//--------------------
for(let chave in pessoa){
    console.log(chave,pessoa.nome);
}

//----------------------
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

//----------------------------------------------------------

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let indice in cores){
    console.log(indice,cores[indice])
}