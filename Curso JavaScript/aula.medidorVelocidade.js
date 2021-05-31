//velocidade maxima até 70km/h
//A cada 5km acima do limite voce ganha 1 ponto
//Math.Floor()
//Pontos maior que 12 -> Carteira suspendida.

verificarVelocidade(81);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    const carteiraSuspensa = 12;

    if (velocidade <= velocidadeMaxima) {
        console.log('Ok');        
    }

    else{
        const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPonto);
        if (pontos >= carteiraSuspensa) {
            console.log('Carteira Suspensa')
;        }else {
        console.log('pontos' , pontos);
            }
    }

} 