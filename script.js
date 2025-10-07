document.getElementById("reserva").addEventListener("click", function () {
    const nomeCompleto = document.getElementById("PrimeiroNome").value.trim();
    const primeiroNome = nomeCompleto.split(" ")[0] || "usuário";

    const email = document.getElementById("email").value.trim();
    const repeteEmail = document.getElementById("repeteEmail").value.trim();
    const mensagemEmail = document.getElementById("mensagem-email");
    const mensagemReserva = document.getElementById("mensagem");

    // Comando para limpar a cada reserva
    mensagemReserva.textContent = "";

    if (email === "" || repeteEmail === "") {
        mensagemEmail.textContent = "⚠ Por favor, preencha os dois campos de email.";
        mensagemEmail.style.color = "orange";
    } else if (email !== repeteEmail) {
        mensagemEmail.textContent = "❌ Os emails não coincidem.";
        mensagemEmail.style.color = "red";
    } else {
        // Emails verificados e tudo certo pra continuar.
        mensagemEmail.textContent = "✅ Emails conferem!";
        mensagemEmail.style.color = "lightgreen";

        // mensagem de sucesso na reserva
        mensagemReserva.textContent = `Sua reserva foi requerida com sucesso, ${primeiroNome}!`;
        mensagemReserva.style.color = "lightgreen";
    }
});