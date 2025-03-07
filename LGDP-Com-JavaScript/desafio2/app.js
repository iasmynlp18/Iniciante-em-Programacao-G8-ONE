//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert("Boas vindas ao nosso site!");


// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt("Que dia da semana é hoje? ");
let sabado = "sabado";
let domingo = "domingo";

if (diaSemana == sabado || diaSemana == domingo) {
    alert("Bom fim de semana!");
}
else {
    alert("Boa semana!");
}


// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let num = prompt("Digite um número: ");
if (num % 2 == 0) {
    alert("O número é par!");
}
else {
    alert("O número é ímpar!");
}


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontos = prompt("Digite sua pontuação: ");
if (pontos >= 100) {
    alert("Parabéns, você venceu!");
} 
else {
    alert("Tente novamente para ganhar.");
}


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 0.00;
alert(`Seu saldo atual é ${saldo}`);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Insira seu nome: ");
alert(`Boas vindas ${nome}`);
