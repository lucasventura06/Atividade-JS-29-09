function registrarCompra() {
    let quantidade = 0;
    let subtotal = 0;

    while (true) {
        let valor = Number(prompt("Digite o valor do produto:"));

        if (valor === 0) {
            break;
        } else if (valor < 0) {
            console.log("Valor inválido.");
        } else {
            quantidade++;
            subtotal += valor;
        }
    }

    if (quantidade === 0) {
        console.log("Nenhum produto registrado");
    } else {
        let desconto = 0;

        if (subtotal >= 100) {
            desconto = subtotal * 0.10;
        }

        let total = subtotal - desconto;

        console.log(`Quantidade de produtos: ${quantidade}`);
        console.log(`Subtotal: R$ ${subtotal}`);
        console.log(`Desconto: R$ ${desconto}`);
        console.log(`Total final: R$ ${total}`);
    }
}

registrarCompra();