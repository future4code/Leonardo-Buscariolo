//Exercicios de interpretação de código
//1. 
//a) será impresso: 10 e depois 50 
//b) apareceria apenas o 50, pois é a ultima função a ser chamada.

//2.
//a) Ela irá primeiro guardar no return o que o usuário0 digitar no prompt, irá transformar em letras minusculas e depois irá verificar se o texto tem ou não a palavra "cenoura" nele, se sim, vai retornar um true ou false.
//b) i. true ~ ii. true ~ iii. true


// //Exercicios de escrita de código
// //EXERCICIO --- 1 --------------------------------------.
// //a)
// const minhasInformacoes = () => {
//     console.log("Eu sou Leonardo, tenho 24 anos, moro em Vinhedo e sou estudante.")
// };

// minhasInformacoes();

// //b)
// const minhasInfos = (nome, idade, cidade, profissao) => {
//     let stringCompleta = console.log(`Eu sou ${nome}, tenho ${idade.toString()} anos, moro em ${cidade} e sou ${profissao}.`);
//     return stringCompleta;
// };

// let saidaMinhasIfos = minhasInfos("Leonardo", 24, "Vinhedo", "estudante");
// console.log(saidaMinhasIfos);

// //EXERCICIO --- 2 --------------------------------------.
// //a)
// let primeiraFuncao = (numero1, numero2) => {
//     let soma = numero1 + numero2;
//     return soma;
// };

// let saidaPrimeiraFuncao = primeiraFuncao(5, 10);
// console.log(saidaPrimeiraFuncao);

// //b)
// let segundaFuncao = (primeiroNumero, segundoNumero) => {
//     let booleano = primeiroNumero === segundoNumero;
//     return booleano;
// };

// let saidaSefundaFuncao = segundaFuncao(2, 2);
// console.log(saidaSefundaFuncao);

// //c)
// let terceiraFuncao = (numBooleano) => {
//     let booleanoPar = numBooleano % 2 === 0;
//     return booleanoPar;
// };

// let saidaTerceiraFuncao = terceiraFuncao(1258);
// console.log(saidaTerceiraFuncao);

// //d)
// let quartaFuncao = (mensagemString) => {
//     let tamanhoString = mensagemString.toLowerCase();
//     return tamanhoString;
// };

// let saidaQuartaFuncao = quartaFuncao("Ola Leonardo!");
// console.log(saidaQuartaFuncao, saidaQuartaFuncao.length);

// //EXERCICIO --- 3 --------------------------------------.
// let funcaoSoma = (numero1, numero2) => {
//     let soma = numero1 + numero2;
//     return soma;
// };

// let funcaoSubtracao = (numero1, numero2) => {
//     let subtracao = numero1 - numero2;
//     return subtracao;
// };

// let funcaoMultiplicacao = (numero1, numero2) => {
//     let multiplicacao = numero1 * numero2;
//     return multiplicacao;
// };

// let funcaoDivisao= (numero1, numero2) => {
//     let divisao = numero1 / numero2;
//     return divisao;
// };

// let entradaNumber1 = Number(prompt("Insira um numero"));
// let entradaNumber2 = Number(prompt("Insira um numero"));

// let saidaSoma = funcaoSoma(entradaNumber1, entradaNumber2);
// let saidaSubtracao = funcaoSubtracao(entradaNumber1, entradaNumber2);
// let saidaMultiplicacao = funcaoMultiplicacao(entradaNumber1, entradaNumber2);
// let saidaDivisao= funcaoDivisao(entradaNumber1, entradaNumber2);

// console.log(`Números inseridos: ${entradaNumber1} e ${entradaNumber2}
// Soma: ${saidaSoma}
// Diferença: ${saidaSubtracao}
// Multiplicação: ${saidaMultiplicacao}
// Divisão: ${saidaDivisao}`);

// //DESAFIOS -------------------------------------------.
// //DESAFIOS 1 -----------------------------------------.
// //a)
// let funcaoDesafio1 = (parametro1) => {
//     let imprimirParametro1 = console.log(parametro1);
//     return imprimirParametro1;
// }


// //b)
// let funcaoDesafio2 = (parametroUm, parametroDois) => {
//     let somaParametro = parametroUm + parametroDois;
// };

// let saidaDesafio2 = funcaoDesafio2(5, 10)

// //DESAFIOS 1 -----------------------------------------.
// let teoremaPitagoras = (cateto1, cateto2) => {
//     let resultadoCat = Math.sqrt((cateto1*cateto1) + (cateto2*cateto2));
//     return resultadoCat;
// };

// let saidaTeoremaPitagoras = teoremaPitagoras(3, 4);
// console.log(saidaTeoremaPitagoras);
