function contarFaixasDeNotas() {
    let maioresOuIguaisA7 = 0;
    let maioresOuIguaisA5 = 0;
    let menoresQue5 = 0;

    for (let i = 1; i <= 6; i++) {
        let nota = Number(prompt(`Digite a nota do ${i}º estudante:`));

        if (nota >= 7) {
            maioresOuIguaisA7++;
        } else if (nota >= 5) {
            maioresOuIguaisA5++;
        } else {
            menoresQue5++;
        }
    }

    console.log(`Notas maiores ou iguais a 7: ${maioresOuIguaisA7}`);
    console.log(`Notas maiores ou iguais a 5 e menores que 7: ${maioresOuIguaisA5}`);
    console.log(`Notas menores que 5: ${menoresQue5}`);
}

contarFaixasDeNotas();