function iniciarMenu() {
    while (true) {
        console.log("1 - Mostrar mensagem de boas-vindas");
        console.log("2 - Calcular o dobro de um número");
        console.log("0 - Encerrar");

        let opc = Number(prompt("Qual opção deseja realizar:"));

        if (opc === 1) {
            console.log("Bem-vindo à oficina de JavaScript");

        } else if (opc === 2) {
            let numero = Number(prompt("Digite um número:"));
            console.log(`Dobro: ${numero * 2}`);

        } else if (opc === 0) {
            console.log("Encerrando programa");
            break;

        } else {
            console.log("Opção inválida");
        }
    }
}

iniciarMenu();