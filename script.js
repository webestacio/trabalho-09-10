// Adiciona um escutador de eventos no botão com id "reserva".
// Toda vez que o botão for clicado, a função dentro dele será executada.
document.getElementById("reserva").addEventListener("click", function () {

    // --- 1. CAPTURA DOS DADOS DO FORMULÁRIO ---
    // Pega o valor dos campos de input e remove espaços em branco do início e do fim com .trim().
    const nomeCompleto = document.getElementById("PrimeiroNome").value.trim();
    const email = document.getElementById("email").value.trim();
    const repeteEmail = document.getElementById("repeteEmail").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const codRoupa = document.getElementById("codRoupa").value.trim();
    const tamanho = document.getElementById("tamanho").value.trim();

    // Para os botões de rádio (sexo), verificamos se eles estão marcados (checked).
    const sexoMasculino = document.getElementById("sexoMasc").checked;
    const sexoFeminino = document.getElementById("sexoFem").checked;

    // --- 2. SELEÇÃO DOS ELEMENTOS DE MENSAGEM ---
    // Pega os parágrafos onde as mensagens de erro e sucesso serão exibidas.
    const mensagemEmail = document.getElementById("mensagem-email");
    const mensagemSucesso = document.getElementById("mensagem");
    const listaErros = document.getElementById("lista-erros"); // Div para a lista de todos os erros.

    // --- 3. LIMPEZA DAS MENSAGENS ANTERIORES ---
    // Para uma boa UX, limpamos todas as mensagens antigas antes de uma nova validação.
    mensagemSucesso.textContent = "";
    mensagemEmail.textContent = "";
    listaErros.innerHTML = ""; // innerHTML é usado para limpar tags HTML, como <br>.

    // --- 4. PROCESSO DE VALIDAÇÃO ---
    // Criamos um array (uma lista) para armazenar todas as mensagens de erro que encontrarmos.
    const erros = [];

    // Verificação do Nome: se o campo estiver vazio, adiciona uma mensagem de erro à lista.
    if (nomeCompleto === "") {
        erros.push("O campo 'Nome' é obrigatório.");
    }

    // Verificação do Sexo: se nenhuma das duas opções estiver marcada.
    if (!sexoMasculino && !sexoFeminino) {
        erros.push("É necessário selecionar o 'Sexo'.");
    }

    // Verificação do Email: se um dos campos de email estiver vazio.
    if (email === "" || repeteEmail === "") {
        erros.push("Por favor, preencha e repita seu email.");
    } else if (email !== repeteEmail) {
        // Se não estiverem vazios, verifica se são diferentes.
        erros.push("Os emails não coincidem.");
    }

    // Verificação de outros campos obrigatórios.
    if (cpf === "") {
        erros.push("O campo 'CPF' é obrigatório.");
    }
    if (codRoupa === "") {
        erros.push("O campo 'Código da roupa' é obrigatório.");
    }
    if (tamanho === "") {
        erros.push("O campo 'Tamanho' é obrigatório.");
    }

    // --- 5. EXIBIÇÃO DO RESULTADO ---
    // Após todas as verificações, verificamos se a nossa lista de erros tem algum item.
    if (erros.length > 0) {
        // SE HOUVER ERROS:
        // Exibimos o título e juntamos todos os erros da lista, separados por uma quebra de linha (<br>).
        listaErros.innerHTML = "<strong>Por favor, corrija os seguintes erros:</strong><br>" + erros.join("<br>");
    } else {
        // SE NÃO HOUVER ERROS:
        // Tudo está correto, então podemos prosseguir com a mensagem de sucesso.
        
        // Pega o primeiro nome do usuário para uma mensagem mais pessoal.
        const primeiroNome = nomeCompleto.split(" ")[0] || "usuário";

        // Mostra uma confirmação visual de que os emails estão corretos.
        mensagemEmail.textContent = "✅ Emails conferem!";
        mensagemEmail.style.color = "lightgreen";

        // Exibe a mensagem de sucesso final, que é mais informativa e útil para o usuário.
        mensagemSucesso.textContent = `Sua reserva para a roupa cód. #${codRoupa} foi requerida com sucesso, ${primeiroNome}!`;
        mensagemSucesso.style.color = "lightgreen";
        
        // Aqui você poderia também limpar o formulário ou enviar os dados para um servidor.
    }
});