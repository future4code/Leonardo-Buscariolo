//Exercicios interpretação
// Exercicio 1 
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10 ,11, 12, 13]
// f. 9

// Exercicio 2
// SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercicios de escrita de código
// Exercicio 1
const nomeDoUsuario = prompt("Insira seu nome");
const emailDoUsuario = prompt("Insira seu e-mail");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

// Exercicio 2
// a + c
let comidaUsuario = prompt("Qual sua comida preferida?");

let comidaPreferida = ["Macarrão", "Temaki", "Lanche", "Cachorro quente", "Pastel"];
console.log(comidaPreferida);
//b
console.log(`Essas são minhas comidas preferidas:
${comidaPreferida[0]}
${comidaPreferida[1].replace(comidaPreferida[1],comidaUsuario)}
${comidaPreferida[2]}
${comidaPreferida[3]}
${comidaPreferida[4]}`);

// Exercicio 3 todas as letras
let listaDeTarefas = [];
let tarefaPendenteUm = prompt("Insira a primeira tarefa pendente:");
let tarefaPendenteDois = prompt("Insira a segunda tarefa pendente:");
let tarefaPendenteTres = prompt("Insira a terceira tarefa pendente:");

listaDeTarefas.push(tarefaPendenteUm, tarefaPendenteDois, tarefaPendenteTres);

console.log(listaDeTarefas);

let tarefaConcluida = Number(prompt("Digite o número da tarefa concluida, sendo 0 a primeira, 1 a segunda e por ai em diante:"));
listaDeTarefas.splice(tarefaConcluida, 1);

console.log(listaDeTarefas);

// Desafio 1
let frase = prompt("Insira uma frase:");

let fraseString = frase.split(' ');

console.log(fraseString);

// Desafio 2
let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

let indexAbacaxi = array.indexOf("Abacaxi");
console.log(indexAbacaxi);
let abacaxiLength = array[indexAbacaxi]; 
console.log(abacaxiLength.length);



