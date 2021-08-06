/* Exercicios de interpretação de código
1.
Ele está fazendo o calculo abaixo basicamente, somando o valor do 'i', o valor do index + 1 e ai vai fazendo o looping, o resultado no console é 10
i = 0
i = 0 + 1 = 1
i = (i = 1) + (index = 1) + 1 = 3
i = (i = 3) + (index = 2) + 1 = 6
i = (i = 6) + (index = 3) + 1 = 10

2.
a) O resultado será um array assim = [19, 21, 23, 25, 27, 30] pois ele está pedindo só os numeros maiores que 18
b) faria basicamente assim: manda o for fazer uma varredura no array todo, pega esse array e usa o indexOf() em numero para ir pegando de um em um:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  console.log(lista.indexOf(numero))
}

3.
O resultado seria:

*
**
***
****

*/


//Exercicios de escrita de código
/* //1.


let quantidadePet = Number(prompt('Você tem algum pet?'));

let funcaoPet = (quantidadePet) => {
    let arrayNomesPet = [];
    if(quantidadePet === 0) {
        console.log('Que pena! Você pode adotar um pet!');
    } else {
        for (let i = 0; i < quantidadePet; i++) {
            let nomePet = prompt('Insira o nome do seu pet');
            arrayNomesPet.push(nomePet);
            console.log(arrayNomesPet[i]);
        }
    }
};

funcaoPet(quantidadePet);
*/

//2. 

/* a)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let funcaoInicial = (arrayOriginal) => {
    for(let i = 0; i < arrayOriginal.length; i++) {
        let valorArray = arrayOriginal[i];
    console.log(valorArray);
    };
};


funcaoInicial(arrayOriginal);
*/

/* b)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let funcaoInicial = (arrayOriginal) => {
    for(let i = 0; i < arrayOriginal.length; i++) {
        let valorArray = arrayOriginal[i];
    console.log(valorArray/10);
    };
};


funcaoInicial(arrayOriginal);
*/

/* c) 

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let novoArray = [];

let funcaoInicial = (arrayOriginal, novoArray) => {
    for(let i = 0; i < arrayOriginal.length; i++) {
        let valorArray = arrayOriginal[i];
        if(valorArray % 2 === 0) {
            novoArray.push(valorArray)
            console.log(novoArray);
        };
    };
};
funcaoInicial(arrayOriginal, novoArray);


/* d)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let funcaoString = (arrayOriginal) => {
    for(let i of arrayOriginal) {
        console.log(`O elemento ${arrayOriginal.indexOf(i)} é: ${i}`);
    };
};

funcaoString(arrayOriginal);
*/

/* e)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 1;
let menorNumero = 200;

let funcaoNumeros = (arrayOriginal, maiorNumero, menorNumero) => {
    for (let bananinha of arrayOriginal) {
        if(bananinha > maiorNumero) {
            maiorNumero = bananinha;
        } else if (bananinha < menorNumero) {
            menorNumero = bananinha;
        };
    };
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);
};

funcaoNumeros(arrayOriginal, maiorNumero, menorNumero);
*/

// ------------------------- DESAFIOS -------------------------

/* 1.
let numeroInicialP1 = Number(prompt('Insira o número a ser adivinhado'));
let numeroDeTentativas = [];

let guessGame = (numeroInicialP1, numeroDeTentativas) => {
    console.log('Vamos Jogar!');
    let chuteP2 = Number(prompt('Insira o seu chute'));
    while(chuteP2 !== numeroInicialP1) {
        while (chuteP2 > numeroInicialP1) {
            numeroDeTentativas.push(chuteP2);
            console.log(`O número chutado foi: ${chuteP2}\n Errrrrrrrou, é menor`);
            chuteP2 = Number(prompt('Insira o seu chute'));
        } 
        while (chuteP2 < numeroInicialP1) {
            numeroDeTentativas.push(chuteP2);
            console.log(`O número chutado foi: ${chuteP2}\n Errrrrrrrou, é maior`);
            chuteP2 = Number(prompt('Insira o seu chute'));
        };
    };    
    if (chuteP2 === numeroInicialP1) {
        console.log (`O número chutado foi: ${chuteP2}\n Acertou mizeravi!\n O numero de tentativas foi: ${numeroDeTentativas.length +1}`)
    };
};

guessGame(numeroInicialP1, numeroDeTentativas);
*/

// 2.

let numeroInicialP1 = Math.floor(Math.random() *100);
let numeroDeTentativas = [];

let guessGame = (numeroInicialP1, numeroDeTentativas) => {
    console.log('Vamos Jogar!');
    let chuteP2 = Number(prompt('Insira o seu chute'));
    while(chuteP2 !== numeroInicialP1) {
        while (chuteP2 > numeroInicialP1) {
            numeroDeTentativas.push(chuteP2);
            console.log(`O número chutado foi: ${chuteP2}\n Errrrrrrrou, é menor`);
            chuteP2 = Number(prompt('Insira o seu chute'));
        } 
        while (chuteP2 < numeroInicialP1) {
            numeroDeTentativas.push(chuteP2);
            console.log(`O número chutado foi: ${chuteP2}\n Errrrrrrrou, é maior`);
            chuteP2 = Number(prompt('Insira o seu chute'));
        };
    };    
    if (chuteP2 === numeroInicialP1) {
        console.log (`O número chutado foi: ${chuteP2}\n Acertou mizeravi!\n O numero de tentativas foi: ${numeroDeTentativas.length +1}`)
    };
};

guessGame(numeroInicialP1, numeroDeTentativas);

//Reflexão: O exercicio foi tranquilo pois eu já conhecia o metodo random(), então sem problemas :)