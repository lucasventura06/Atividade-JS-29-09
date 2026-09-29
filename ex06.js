function calcularCompra(valorCompra) {
    if (valorCompra >= 200) {
        let desc = valorCompra * (10/100);
        let tot = valorCompra - desc;

        console.log(`Valor Compra: ${valorCompra}`);
        console.log(`Desconto: ${desc}`);
        console.log(`Valor final: ${tot}`);
    }
}

calcularCompra(250);