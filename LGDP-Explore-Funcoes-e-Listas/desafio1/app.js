// Altere o conteúdo da tag `h1` com `document.querySelector` e atribua o seguinte texto: `Hora do Desafio`.

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";


//Crie uma função que exiba no console a mensagem `O botão foi clicado` sempre que o botão `Console` for pressionado.

function clicouConsole() {
    console.log("O botão foi clicado");
}


//Crie uma função que exiba um alerta com a mensagem: `Eu amo JS`, sempre que o botão `Alerta` for pressionado.

function clicouAlerta() {
    alert("Eu amo JS");
}


//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: `Estive em {cidade} e lembrei de você`.

function clicouPrompt() {
    let cidade = prompt("Digite uma cidade do Brasil: ");
    alert(`Estive em ${cidade} e lembrei de você`);
}


//  Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function clicouSoma() {
    let n1 = parseInt(prompt("Digite um número inteiro: "));
    let n2 = parseInt(prompt("Digite outro número inteiro: "));
    let soma = n1 + n2; 
    alert(`A soma entre ${n1} + ${n2} é ${soma}`); 
}
