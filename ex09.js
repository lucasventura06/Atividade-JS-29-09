function verificarMeta(nota, frequencia) {
    if (nota >= 7 && nota <= 10 &&  frequencia>= 75 && frequencia <= 100) {
        return "A meta foi atendida";
    } else {
        return "A meta não foi atendida";
    }
}

console.log(verificarMeta(8,80));
console.log(verificarMeta(8,60));
console.log(verificarMeta(6,98));
console.log(verificarMeta(7,75));