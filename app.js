alert('Boas vindas ao jogo do número secreto criado por Geovane :)');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log("O numero secreto é " + numeroSecreto + ".");
let chute;
tentativas = 1;

//Enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 a ' + numeroMaximo);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert('O número que você escolheu é maior que o número secreto.');
        } else {
            alert('O número que você escolheu é menor que o número secreto.');
        }
        // Método de atribuição que seria (contador = contador + 1)
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa);

