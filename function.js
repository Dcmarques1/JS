//função com parâmetro
//utilizando a função para calcular a area do quadrado
//O termo "function" ddeclara que faremos uma função
//o termo "quadrado" é o nome da função
//entre parênteses são os argumentos que devem ser usados
//entre chaves o código que define a função

function quadrado (lado) {
    let area = lado * lado
    console.log(`Área do quadrado = ${area}`);
}
quadrado(4)

//Retornar o valor que eu especifiquei

function soma(x,y) {
    return console.log(x + y)
}
soma(5,8)

function teste(a) {
    return console.log("Olá");
    console.log(a);
}
teste(4,1)
//Função Anônima
//não necessariamente necessita de um nome
//

let square = function(numero) {return numero * numero};
console.log(square(4));

//arrow
let nameLetters = (name) => name.length
console.log(nameLetters("Douglas"));

let soma1 = (x,y) => x + y
console.log(soma1(10,50));
