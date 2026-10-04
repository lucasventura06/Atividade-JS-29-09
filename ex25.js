function somarAteZero() {
    let soma = 0;
    let quantidade = 0;

    while (true) {
        let numero = Number(prompt("Digite um número:"));

        if (numero === 0) {
            break;
        }

        soma += numero;
        quantidade++;
    }

    console.log(`Soma: ${soma}`);
    console.log(`Quantidade: ${quantidade}`);
}

somarAteZero();