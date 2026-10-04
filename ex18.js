function calcularFatorial(numero) {
    let fat = 1;
    for (let i=1;i<=numero;i++) {
        fat *= i
    }
    return fat;
}

console.log(calcularFatorial(4));