function solicitarNotaValida() {
    while (true) {
        let nota = Number(prompt(`Digite uma nota:`));
        if (nota < 0 || nota > 10) {
            console.log("Nota Inválida")
        } else {
            return nota;
        }
    }
}

console.log(solicitarNotaValida());