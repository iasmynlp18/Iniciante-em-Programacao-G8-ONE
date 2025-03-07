// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function IMC(altura, peso) {
    return peso / (altura * altura);
}

console.log(IMC(1.78, 89.56).toFixed(2));  // imprime com duas casas decimais


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(num) {
    let num1 = parseInt(num);
    if (num1 == 0 || num1 == 1) {
        return 1;
    }
    else {
        return num1 * fatorial(num1 - 1);
    }
}

console.log(fatorial(5));


// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function convDolar(valor) {
    const dolar = 4.80;
    return dolar * valor;
}

console.log(convDolar(12.56).toFixed(2));


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function medidaSala(altura, largura) {
    let area = (altura * largura);
    let perimetro = (altura * 2) + (largura * 2);
    alert(`A área da sala retangular é de ${area} m2`);
    alert(`O perímetro da sala retangular é de ${perimetro} m2`);
}

medidaSala(4.65, 15.42);


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function salaCircular(raio) {
    const pi = 3.14;
    let area = pi * (raio * raio); 
    let perimetro = 2 * (pi * raio);
    alert(`A área da sala circular é de ${area.toFixed(3)} m2`);
    alert(`O perímetro da sala circular é de ${perimetro.toFixed(3)} m2`);
}

salaCircular(2.54);


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// fiz exclusivamente para a tabuada do 9 já que ainda não sei usar o for em JS.

function tabuada(num) {
    let num1 = parseInt(num);
    let segDigito = 1;
    while (segDigito < num1+2) {  
        let resultado = num1 * segDigito;
        alert(`${num1} * ${segDigito} = ${resultado}`);
        segDigito++;
    }
}

tabuada(9);
