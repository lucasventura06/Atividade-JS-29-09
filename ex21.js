function contarParesEImpares() {
    let cont = 0;
    let somapar = 0;
    let somaimpar = 0;

    while (cont < 10) {
        let parorimpar = Number(prompt(`Digite o ${cont}º número inteiro`));
        if (parorimpar % 2 == 0) {
            somapar++;
        } else {
            somaimpar++;
        }
        cont++;
    }

    return `Pares: ${somapar} e Ímpares: ${somaimpar}`
}

console.log(contarParesEImpares());