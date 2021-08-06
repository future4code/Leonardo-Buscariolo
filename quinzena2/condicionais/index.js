//---------------- Exercicio de interpretação  de código //----------------

/*
Exercicio 1. 
a) Ele vai pegar o input do usuario, transformar em Number, verificar se o resto da divisão é 0m se for, imprime "passou no teste", se tiver resto, a divisao nao for numero interio, imprime "não passou no teste"

b) Numeros que o resto da divisão por 2 é 0, ou seja, numeros inteiros pares

c) Numeros não inteiros, impares.


Exercicio 2.
a) O código irá pegar a fruta digitada pelo usuário e mostrará o preço catalogado

b) "O preço da fruta Maçã é R$ 2.25"

c) "O preço da fruta Pêra é R$ 5"
   

Exercicio 3.
a) Ela está pedindo um numero ao usuário e transformando a entrada em Number

b) Com o numero 10 imprimiria "Esse número passou no teste", já com o -10 daria erro pois não atende a nenhum requsito do if() e não foi deixado nenhum else{} como resposta default,

c) Sim, dará um erro informando que a variavel "mensagem" não foi definida, então nao da para chama*la

*/


//---------------- Exercicio de escrita de código //----------------

/*
//1.
let idade = Number(prompt("Insira sua idade"));

let podeDirigir = (entrada) => {
    if (entrada >= 18) {
        console.log("Você pode dirigir");
    } else {
        console.log("Você não pode dirigir")
    };
};

podeDirigir(idade);
*/

/*
//2.
let turno = prompt("Insira seu turno sendo: M (matutino), V (Vespertino) ou N (Noturno)")

let turnoAluno = (entrada1) => {
    if (entrada1.includes('M')) {
        console.log('Bom Dia!')
    } else if (entrada1.includes('V')) {
        console.log('Boa Tarde!')
    } else if (entrada1.includes('N')) {
        console.log('Boa Noite!')
    } else {
        console.log('Insira um turno válido');
    }
};

turnoAluno(turno);
*/

/*
//3.
let turno = prompt("Insira seu turno sendo: M (matutino), V (Vespertino) ou N (Noturno)")

let turnoAluno = (entrada1) => {
    switch (entrada1) {
        case 'M':
            console.log('Bom Dia!')
            break;
        case 'V':
            console.log('Boa Tarde!')
            break;
        case 'N':
            console.log('Boa Noite!')
            break;
        default:
            console.log('Insira um turno válido');
            break;
    }
};

turnoAluno(turno);
*/

/*
//4.
let filmeGenero = prompt("Insira o gênero do filme").toLowerCase();
let filmeValor = Number(prompt("Insira o valor do ingresso"));

let assistirFilme = (genero, valor) => {
    if (genero.includes('fantasia') && valor <= 15) {
        console.log("Bom filme!");
    } else {
        console.log("Escolha outro filme :(")
    }

};

assistirFilme(filmeGenero, filmeValor);
*/

// -------------- DESAFIOS --------------

/*
//1.
let filmeGenero = prompt("Insira o gênero do filme").toLowerCase();
let filmeValor = Number(prompt("Insira o valor do ingresso"));
let snacks = prompt("Deseja comprar algum lanche? Pipoca, chocolate, doces?").toLowerCase();

let assistirFilme = (genero, valor, lanche) => {
    if (genero.includes('fantasia') && valor <= 15) {
        console.log("Bom filme!");
        if (lanche.includes(lanche)) {
            console.log(`Aproveite o seu ${lanche}`)
        }
    } else {
        console.log("Escolha outro filme :(")
    }

};

assistirFilme(filmeGenero, filmeValor, snacks);
*/

//2.

let nomeUsuario = prompt('Insira seu nome completo').toLowerCase();
let tipoJogo = prompt('Insira o tipo de jogo, sendo: IN = internacional e DO = doméstico').toUpperCase();
let etapaJogo = prompt('Insira a etapa do jogo, sendo: SF = semi-final, DT = decisão de terceiro lugar e FI = final').toUpperCase();
let categoria = prompt('Esolha a categoria: 1, 2, 3 ou 4');
let quantidadeIngresso = Number(prompt('Insira a quantidade de ingressos desejado'));

let precoJogos = [
   {semifinais: {
      categoria1: 1320,
      categoria2: 880,
      categoria3: 550,
      categoria4: 220
   }},
   {terceiro: {
      categoria1: 660,
      categoria2: 440,
      categoria3: 330,
      categoria4: 170
   }},
   {finais: {
      categoria1: 1980,
      categoria2: 1320,
      categoria3: 880,
      categoria4: 330
   }},
];

let mostrarDetalhes = (nome, tipo, etapa, categoria, quantidade, preco) => {
   switch (tipo) {
      case 'IN':
         tipo = 'Internacional'
         break;
      case 'DO':
         tipo = 'Nacional'
         break;   
      default:
         console.log('Selecione IN ou DO')
         break;
   }

   switch (etapa) {
      case 'SF':
         etapa = 'Semi-final'
         break;
      case 'DT':
         etapa = 'Decisão de terceiro lugar'
         break;
      case 'FI':
         etapa = 'Final'
         break   
      default:
         console.log('Selecione SF, DT ou FI')
         break;
   }
   console.log(`---Dados da compra---\n Nome do cliente: ${nome}\n Tipo do jogo: ${tipo}\n Etapa do jogo: ${etapa}\n Categoria: ${categoria}\n Quantidade de ingressos: ${quantidade}`)

}

let calcularValor = (nome, tipo, etapa, categoria, quantidade, preco) => {
 
    //Domestico
    let valorIngresso;
    let valorUnitario;
    
    if(tipo.includes('DO') && etapa.includes('SF') && categoria.includes('1')) { // domestico
       valorIngresso = preco[0].semifinais.categoria1 * quantidade;
       valorUnitario = preco[0].semifinais.categoria1
    } else if (tipo.includes('DO') && etapa.includes('SF') && categoria.includes('2')) { // domestico
       valorIngresso = preco[0].semifinais.categoria2 * quantidade;
       valorUnitario = preco[0].semifinais.categoria2
    } else if (tipo.includes('DO') && etapa.includes('SF') && categoria.includes('3')) { // domestico
       valorIngresso = preco[0].semifinais.categoria3 * quantidade;
       valorUnitario = preco[0].semifinais.categoria3
    } else if (tipo.includes('DO') && etapa.includes('SF') && categoria.includes('4')) { // domestico
       valorIngresso = preco[0].semifinais.categoria4 * quantidade;
       valorUnitario = preco[0].semifinais.categoria4
    } else if (tipo.includes('DO') && etapa.includes('DT') && categoria.includes('1')) { // domestico
       valorIngresso = preco[1].terceiro.categoria1 * quantidade;
       valorUnitario = preco[1].terceiro.categoria1
    } else if (tipo.includes('DO') && etapa.includes('DT') && categoria.includes('2')) { // domestico
       valorIngresso = preco[1].terceiro.categoria2 * quantidade;
       valorUnitario = preco[1].terceiro.categoria2
    } else if (tipo.includes('DO') && etapa.includes('DT') && categoria.includes('3')) { // domestico
       valorIngresso = preco[1].terceiro.categoria3 * quantidade;
       valorUnitario = preco[1].terceiro.categoria3
    } else if (tipo.includes('DO') && etapa.includes('DT') && categoria.includes('4')) { // domestico
       valorIngresso = preco[1].terceiro.categoria4 * quantidade;
       valorUnitario = preco[1].terceiro.categoria4
    } else if (tipo.includes('DO') && etapa.includes('FI') && categoria.includes('1')) { // domestico
       valorIngresso = preco[2].finais.categoria1 * quantidade;
       valorUnitario = preco[2].finais.categoria1
    } else if (tipo.includes('DO') && etapa.includes('FI') && categoria.includes('2')) { // domestico
       valorIngresso = preco[2].finais.categoria2 * quantidade;
       valorUnitario = preco[2].finais.categoria2
    } else if (tipo.includes('DO') && etapa.includes('FI') && categoria.includes('3')) { // domestico
       valorIngresso = preco[2].finais.categoria3 * quantidade;
       valorUnitario = preco[2].finais.categoria3
    } else if (tipo.includes('DO') && etapa.includes('FI') && categoria.includes('4')) { // domestico
       valorIngresso = preco[2].finais.categoria4 * quantidade;
       valorUnitario = preco[2].finais.categoria4
    } else if (tipo.includes('IN') && etapa.includes('SF') && categoria.includes('1')) { // internacional
       valorIngresso = preco[0].semifinais.categoria1 * quantidade*4.10; 
       valorUnitario = preco[0].semifinais.categoria1 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('SF') && categoria.includes('2')) { // internacional
       valorIngresso = preco[0].semifinais.categoria2 * quantidade*4.10;
       valorUnitario = preco[0].semifinais.categoria2 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('SF') && categoria.includes('3')) { // internacional
       valorIngresso = preco[0].semifinais.categoria3 * quantidade*4.10;
       valorUnitario = preco[0].semifinais.categoria3 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('SF') && categoria.includes('4')) { // internacional
       valorIngresso = preco[0].semifinais.categoria4 * quantidade*4.10;
       valorUnitario = preco[0].semifinais.categoria4 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('DT') && categoria.includes('1')) { // internacional
       valorIngresso = preco[1].terceiro.categoria1 * quantidade*4.10;
       valorUnitario = preco[1].terceiro.categoria1 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('DT') && categoria.includes('2')) { // internacional
       valorIngresso = preco[1].terceiro.categoria2 * quantidade*4.10;
       valorUnitario = preco[1].terceiro.categoria2 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('DT') && categoria.includes('3')) { // internacional
       valorIngresso = preco[1].terceiro.categoria3 * quantidade*4.10;
       valorUnitario = preco[1].terceiro.categoria3 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('DT') && categoria.includes('4')) { // internacional
       valorIngresso = preco[1].terceiro.categoria4 * quantidade*4.10;
       valorUnitario = preco[1].terceiro.categoria4 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('FI') && categoria.includes('1')) { // internacional
       valorIngresso = preco[2].finais.categoria1 * quantidade*4.10;
       valorUnitario = preco[2].finais.categoria1 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('FI') && categoria.includes('2')) { // internacional
       valorIngresso = preco[2].finais.categoria2 * quantidade*4.10;
       valorUnitario = preco[2].finais.categoria2 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('FI') && categoria.includes('3')) { // internacional
       valorIngresso = preco[2].finais.categoria3 * quantidade*4.10;
       valorUnitario = preco[2].finais.categoria3 * 4.10;
    } else if (tipo.includes('IN') && etapa.includes('FI') && categoria.includes('4')) { // internacional
       valorIngresso = preco[2].finais.categoria4 * quantidade*4.10;
       valorUnitario = preco[2].finais.categoria4 * 4.10;
    } else {
       console.log('Você selecionou algo errado');
    }
 
    console.log(`---Valores---\n Valor do ingresso: R$ ${valorUnitario}.00\n Valor total: R$ ${Math.floor(valorIngresso)}.00`)
 
 }

 mostrarDetalhes(nomeUsuario, tipoJogo, etapaJogo, categoria, quantidadeIngresso, precoJogos)
 calcularValor(nomeUsuario, tipoJogo, etapaJogo, categoria, quantidadeIngresso, precoJogos)
