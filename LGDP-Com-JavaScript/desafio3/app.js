alert("Boas vindas ao nosso site!");

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número

let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;   
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;

while (0 <= contador2) {
    alert(contador2);
    contador2--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let num = prompt("Digite um número: ");

while (0 <= num) {
    console.log(num);
    num--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let num2 = prompt("Digite um número: ");
let contador3 = 0;

while (contador3 <= num2) {
    console.log(contador3);
    contador3++;
}
