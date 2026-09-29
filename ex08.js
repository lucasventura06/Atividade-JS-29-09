function calcular(numero1, numero2, operacao) {
    if (operacao === "+") {
        return numero1 + numero2;
    } else if (operacao === "-") {
        return numero1 - numero2;
    } else if (operacao === "*") {
        return numero1 * numero2;
    } else if (operacao === "/") {
        if (numero2 !== 0) {
            return numero1 / numero2;
        } else {
            return "Não é possivel dividir por 0";
        }
    } else {
        return "Opção inválida"
    }
}

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));
console.log(calcular(10, 0, "/"));
console.log(calcular(10, 5, "%"));