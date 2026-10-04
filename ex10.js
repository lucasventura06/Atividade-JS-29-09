function verificarBeneficio(emprestimos, oficinas) {
    if (emprestimos >= 10 || oficinas >= 3) {
        return "Você tem direito ao benefício"
    } else {
        return "Você não tem direito ao benefício"
    }
}

console.log(verificarBeneficio(3, 2));
console.log(verificarBeneficio(12, 2));
console.log(verificarBeneficio(9, 3));
console.log(verificarBeneficio(10, 4));