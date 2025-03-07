//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.
let nomesAmigos = [];

    function adicionarAmigos() {
        
        // Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
        let input = document.querySelector('input').value;
        
        // Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio, se estiver vazio exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        if (input == '') {
            alert("Por favor, insira um nome.");
        }
        else {   

            // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
            nomesAmigos.push(input);      
            attListaDeAmigos();
            
            // Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia
            document.getElementById('amigo').value = '';
        }
    }

    function attListaDeAmigos() {
            
        // Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
        let listaAmigos = document.getElementById("listaAmigos");

        // Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
        listaAmigos.innerHTML = '';

        // Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
        for (let i = 0; i < nomesAmigos.length; i++) {
            let novoElemento = `<li>${nomesAmigos[i]}</li>`;

            // Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
            listaAmigos.innerHTML += novoElemento;
        }
    }

    function sortearAmigo() {
        
        // Validar se há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
        if (nomesAmigos == '') {
            alert("Por favor, insira um nome.");
        }
        else {

            // Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
            let indiceRandom = Math.floor(Math.random() * nomesAmigos.length);

            // Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
            let nomeSorteado = nomesAmigos[indiceRandom];
        
            // Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
            document.getElementById("resultado");
            resultado.innerHTML = nomeSorteado;
        }
    }
