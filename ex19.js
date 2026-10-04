function repetirMensagem(mensagem, quantidade) {
    for (let i=1;i<=quantidade;i++) {
        console.log(`${i} - ${mensagem}`)
    }
}

repetirMensagem("Vasco", 5);