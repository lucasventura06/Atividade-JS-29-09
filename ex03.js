function compararNumeros(numero1, numero2) {
    let maior = 0;

    if (numero1 > numero2) {
        return `maior: ${numero1}`;
    } else if (numero1 < numero2) {
        return `maior: ${numero2}`
    } else {
        return "Iguais"
    }
}

console.log(compararNumeros(9,4));
console.log(compararNumeros(4,9));
console.log(compararNumeros(5,5));