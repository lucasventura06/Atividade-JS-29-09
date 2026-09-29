function verificarParticipacao(idade) {
    if (idade >= 16) {
        return "Participação permitida";
    } else if (idade < 0) {
        return "Idade inválida"
    } else {
        return "Participação não permitida"
    }
}


console.log(verificarParticipacao(15));
console.log(verificarParticipacao(16));
console.log(verificarParticipacao(-1));