function classificarNumero(numero) {
    if (numero === 0) {
        return "Zero";
    } else if (numero > 0) {
        return "Positivo";
    } else {
        return "Negativo";
    }
}

console.log(classificarNumero(0));
console.log(classificarNumero(-3));
console.log(classificarNumero(8));