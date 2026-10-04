function calcularMedia() {
    let soma = 0;

    for (let i = 1; i <= 4; i++) {
        let nota = Number(prompt(`Digite a ${i}ª nota:`));
        soma += nota;
    }

    let media = soma / 4;

    return media;
}

console.log(calcularMedia());