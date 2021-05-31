// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

loop(10);

function loop (limite){
    
    for (let i = 0; i <= limite; i++) {
        if (i % 2 ===0) 
            console.log(i ,'Par');
        else 
            console.log(i, 'Impar');
        
        }
    
} 

