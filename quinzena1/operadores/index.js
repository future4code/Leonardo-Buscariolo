// Exercicios de interpretação:
//Exercicio 1:
//a. false
//b. false
//c. true
//d. boolean

//Exercicio 2:
//O problema é que ele não colocou o Number() no recebimento do prompt, ou seja, o que o usuário digitar, vai ficar como string nas variaveis e não vai somar como number, apenas concatenar a tring 1 com a string 2. Então se o usuário digitar: "15" e "25", ao invés de retornar 40 como number no console vai ser impresso um "1525".

//Exercicio 2:
//Para solucionar seria necessário adicionar o Number() em volta do prompt, dessa forma: let variavel = Number(prompt("Digite um numero")); para as duas variaveis do prompt.

//Exercicios de escrita de código:


//Exercicio 1:
let idade = Number(prompt("Qual sua idade?"));
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));
let diferencaIdade = idade > idadeAmigo;

console.log('Sua idade é maior que a do seu melhor amigo?: '+diferencaIdade);

//Exercicio 2:
let numero = Number(prompt("Insira um número par"));
console.log(numero%2);
//O resultado sempre será zero 0
//O resultado caso entre um número impar sempre será um 1

// Exercicio 3:
let idadeAnos = Number(prompt("Quantos anos você tem?"));

let idadeMeses = idadeAnos*12;
let idadeDias = idadeAnos*365;
let idadeHoras = (idadeAnos*365)*24;

console.log("Você tem "+idadeMeses+" meses de vida.");
console.log("Você tem "+idadeDias+" dias de vida.");
console.log("Você tem "+idadeHoras+" horas de vida.");

//Exercicio 4:
let numeroUm = Number(prompt("Insira um número"));
let numeroDois = Number(prompt("Insira outro número"));

console.log("O primeiro numero é maior que segundo? ", numeroUm > numeroDois);
console.log("O primeiro numero é igual ao segundo? ", numeroUm === numeroDois);
console.log("O primeiro numero é divisível pelo segundo? ", numeroUm % numeroDois === 0); // Resultado sera true se o resto for === 0
console.log("O segundo numero é divisível pelo primeiro? ", numeroDois % numeroUm === 0); // Resultado sera true se o resto for === 0


//Desafio
//Exercicio 1 - A, B, C e D todas juntas
function conversorTemperatura() {
    let fahrenheit = Number(prompt("Digite fahrenheit"));
    let kelvin = Number(prompt("Digite kelvin"));
    let celcius = Number(prompt("Digite celcius"));

    let fahrenheitParaKelvin = (fahrenheit - 32)*(5/9) + 273.15;
    let celciusParaFahrenheit = (celcius)*(9/5) + 32;
    let celciusParaKelvin = (celciusParaFahrenheit - 32)*(5/9) + 273.15;

    console.log(`${fahrenheit} F corresponde à ${fahrenheitParaKelvin} K`);
    console.log(`${celcius} C corresponde à ${celciusParaFahrenheit} F`);
    console.log(`${celcius} C corresponde à ${celciusParaKelvin} K`);
    console.log(`${celcius} C corresponde à ${celciusParaKelvin} K e à ${celciusParaFahrenheit} F`);
}

