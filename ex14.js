function somarCincoValores() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = Number(prompt(`Digite o ${i}º número:`));
        soma += numero;
    }

    return soma;
}

console.log(somarCincoValores());