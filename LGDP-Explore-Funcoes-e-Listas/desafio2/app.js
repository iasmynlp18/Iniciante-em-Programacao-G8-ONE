// Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
    console.log("Olá, mundo!");
    
}

olaMundo();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function saudacaoNome(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacaoNome("Iasmyn");


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero) {
    return (numero + numero);
}

console.log(dobro(6));


// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3 ;    
}

console.log(media(10,9,5));


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }

    /*            ternário
        return (n1 > n2) ? n1 : n2;
    */

}

console.log(maior(3,70));


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicação(n1) {
    return (n1 * n1);
}

console.log(multiplicação(5));
