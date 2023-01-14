// Botoes do produtor
$("#submitIdProdutor").click(function () {
    var idProdutor = $("#inputIdProdutor").val(); // Pega ID passado no formulário

    if (idProdutor) { // Verifica se algo foi digitado
        $.get("/produtor/" + idProdutor, function (dados) { // Faz a requisição para a rota de consultar Produtor por ID
            $("#server-results").html("<h3 class='mx-auto'>Nome: " + dados.nomeProdutor + "</h3>" +
                "<h3 class='mx-auto'> CPF: " + dados.cpfProdutor + "</h3>"); // Adiciona feedback na DIV de resultados
        });
    } else {
        $("#server-results").html("<h3>Digite um ID válido.</h3>"); // Notifica erro
    }

})

$("#submitCadastrarProdutor").click(function () {
    var nomeProdutor = $("#inputNomeProdutor").val(); // Pega nome passado no formulário
    var cpfProdutor = $("#inputCpfProdutor").val(); // Pega cpf passado no formulário

    if(nomeProdutor && cpfProdutor) {
        $.post("/produtor", { // Faz a requisição para a rota de cadastrar Produtor por ID
            nomeProdutor: nomeProdutor,
            cpfProdutor: cpfProdutor
        }, function (dados) {
            $("#server-results").html("<h3>Produtor: " + dados.nomeProdutor + " inserido no banco de dados.</h3>"); // Adiciona feedback na DIV de resultados
        });
    } else {
        $("#server-results").html("<h3>Preencha todos os campos!</h3>"); // Notifica erro
    }
})

// Botoes da propriedade

$("#submitIdPropriedade").click(function () {
    var idPropriedade = $("#inputIdPropriedade").val(); // Pega ID passado no formulário

    if (idPropriedade) { // Verifica se algo foi digitado
        $.get("/propriedade/" + idPropriedade, function (dados) { // Faz a requisição para a rota de consultar Produtor por ID
            $("#server-results").html("<h3 class='mx-auto'>Nome: " + dados.nomePropriedade + "</h3>" +
                "<h3 class='mx-auto'>Cadastro Rural: " + dados.cadastroRural + "</h3>"); // Adiciona feedback na DIV de resultados
        });
    } else {
        $("#server-results").html("<h3>Digite um ID válido.</h3>"); // Notifica erro
    }

})

$("#submitCadastrarPropriedade").click(function () {
    var nomePropriedade = $("#inputNomePropriedade").val(); // Pega nome passado no formulário
    var cadastroRural = $("#inputCadastroRural").val(); // Pega Cadastro Rural passado no formulário

    if(nomePropriedade && cadastroRural) {
        $.post("/propriedade", { // Faz a requisição para a rota de cadastrar Propriedade por ID
            nomePropriedade: nomePropriedade,
            cadastroRural: cadastroRural
        }, function (dados) {
            $("#server-results").html("<h3>Propriedade: " + dados.nomePropriedade + " inserido no banco de dados.</h3>"); // Adiciona feedback na DIV de resultados
        });
    } else {
        $("#server-results").html("<h3>Preencha todos os campos!</h3>"); // Notifica erro
    }
})
