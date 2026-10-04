function encontrarMaiorNumero() {
    let maior;
    for (let i=1;i<=5;i++) {
        let numero = Number(prompt(`Digite o ${i}º número:`));
        
        if (i===1) {
            maior = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            }
        }

    }
    return maior;
}