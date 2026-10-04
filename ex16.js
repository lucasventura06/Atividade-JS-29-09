function somarAte(limite) {
    let soma = 0;
    let cont = 1;

    while (cont <= limite) {
        soma += cont
        cont++;
    }

    return soma;
}

console.log(somarAte(5));