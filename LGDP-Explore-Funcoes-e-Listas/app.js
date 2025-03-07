let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;

    if ("speechSynthesis' in window") {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.3; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

function verificarChute() {
    // pega o número que o user digitar na caixa de texto
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else { // dicas
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        }
        else {
            exibirTextoNaTela("p", "O número secreto é maior");    
        }
        limparCaixadeTexto();
    }
    tentativas++;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdDeNumerosLista = listaDeNumerosSorteados.length;

    if (qtdDeNumerosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        // recursão
        return gerarNumeroAleatorio();
    } 
    else {
        // add o numero escolhido na lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        
    }
}

function limparCaixadeTexto() {
    // faz a var chute receber o que for digitado na caixa de texto
    chute = document.querySelector("input");
    chute.value = ""; 
}

function reiniciarJogo() { 
    numeroSecreto = gerarNumeroAleatorio();
    limparCaixadeTexto();
    tentativas = 1;
    exibirMensagemInicial();
    
    // acessa o segundo botão pelo id dele e seta no atributo disabled o valor true, pra ele desabiitar o botão enquanto o jogo estiver rolando e aparecer só quando o user acertar
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

