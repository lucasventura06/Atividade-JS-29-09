function verificarCodigoDeAcesso() {
    let codigoCorreto = "javascript123";

    for (let tentativa = 1; tentativa <= 3; tentativa++) {
        let codigo = prompt("Digite o código de acesso:");

        if (codigo === codigoCorreto) {
            console.log("Acesso permitido");
            break;
        } else {
            let restantes = 3 - tentativa;

            if (restantes > 0) {
                console.log(`Código incorreto. Tentativas restantes: ${restantes}`);
            } else {
                console.log("Acesso bloqueado");
            }
        }
    }
}

verificarCodigoDeAcesso();