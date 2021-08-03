// ---------- Exercícios de interpretação de código ----------
//1. a) Matheus Nachtergaele, Virginia Cavendish, {canal: "Globo", horario: "14"}

//2. a) {nome: "Juca", idade: 3, raca: "SRD"} // {nome: "Juba", idade: 3, raca: "SRD"} // {"Jubo", idade: 3, raca: "SRD" }
//2. b) esses três pontos é o spread ou espalhamento, ele basicamente copia as informações de um objeto para outro, ou altera um item, ou inclui um item para outro objeto.

//3. a) false // undefined
//3. b) o false é porquê a função está definindo que o primeiro parametro será um item do objeto e o segundo parametro "propriedade" irá acessar o item do objeto através de colchetes. A altura volta undefined pois não foi definida nenhuma propriedade com esse nome no objeto


// ---------- Exercícios de escrita de código ----------
//1.
//a)
// let pessoa = {
//     nome: "Leonardo",
//     apelidos: ["Leo", "Sofiati", "Kevin"]
// };

// let funcaoUm = (pessoaArgumento) => {    
//     let pessoaIn = console.log(`Eu sou ${pessoaArgumento.nome}, mas pode me chamar de: ${pessoaArgumento.apelidos[0]}, ${pessoaArgumento.apelidos[1]} ou ${pessoaArgumento.apelidos[2]}`);
//     return pessoaIn
// };

// let pessoaOut1 = funcaoUm(pessoa);

// //b)
// let pessoa2 = {
//     ...pessoa,
//     apelidos: ["Nego", "Soso", "José"]
// };

// let pessoaOut2 = funcaoUm(pessoa2);

// //2.
// //a)
// let objetoUm = {
//     nome: "Leonardo",
//     idade: 24,
//     profissao:"Vendedor",
// };

// let objetoDois = {
//     nome: "Julia",
//     idade: 23,
//     profissao:"Recrutadora"
// };

// //b)
// let funcaoJuncao = (obj1, obj2) => {
//     let objetoTres = [obj1.nome, obj2.nome, obj1.nome.length, obj2.nome.length, obj1.idade, obj2.idade, obj1.profissao, obj2.profissao, obj1.profissao.length, obj2.profissao.length]
//     return objetoTres;
// }

// let saidaFuncaoJuncao = funcaoJuncao(objetoUm, objetoDois);

// console.log(saidaFuncaoJuncao);

// //3.
// //a)
// let carrinho = [];

// //b)
// let frutaUm = {
//     nome: "Banana",
//     disponibilidade: true
// };

// let frutaDois = {
//     nome: "Morango",
//     disponibilidade: true
// };

// let frutaTres = {
//     nome: "Pessego",
//     disponibilidade: true
// };


// //c)
// let funcaoCarrinho = (objetoUm, objetoDois, objetoTres) => {
//     carrinho = [
//         {...objetoUm},
//         {...objetoDois},
//         {...objetoTres},
//     ]
//     return carrinho;
// };

// carrinho = funcaoCarrinho(frutaUm, frutaDois, frutaTres);

// console.log(carrinho);


// ---------- DESAFIOS ----------
// DESAFIO 1.

// let nome = prompt("Insira seu nome");
// let idade = Number(prompt("Insira sua idade"));
// let profissao = prompt("Insira sua profissão");

// let funcaoInput = (usuarioNome, usuarioIdade, usuarioProfissao) => {
//     let objetoJuncao = {
//         nome: usuarioNome,
//         idade: usuarioIdade,
//         profissao: usuarioProfissao
//     };

//     return objetoJuncao;
// };

// let funcaoOutput = funcaoInput(nome, idade, profissao);

// console.log(funcaoOutput);
// console.log(typeof funcaoOutput);

// OU, uma outra opção:

// let funcaoInput = () => {
//     let nome = prompt("Insira seu nome");
//     let idade = Number(prompt("Insira sua idade"));
//     let profissao = prompt("Insira sua profissão");

//     let objetoJuncao = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     };

//     return objetoJuncao;
// };

// let funcaoOutput = funcaoInput();

// console.log(funcaoOutput);
// console.log(typeof funcaoOutput);


// DESAFIO 2.

// let objetoUm = {
//     anoLancamento: 2001,
//     nomeFilme: "Senhor dos Aneis"
// };

// let objetoDois = {
//     anoLancamento: 2019,
//     nomeFilme: "Vingadores Ultimato"
// };

// let funcaoFilmes = (filme1, filme2) => {
//     let saidaUm = filme1.anoLancamento < filme2.anoLancamento;
//     let saidaDois = filme1.anoLancamento === filme2.anoLancamento;

//     let saidaFilmes = console.log(`O primeiro filme foi lançado antes do segundo? ${saidaUm}
//     O primeiro filme foi lançado no mesmo ano do segundo? ${saidaDois}`);

//     return saidaFilmes
// };

// let funcaoFilmesSaida = funcaoFilmes(objetoUm, objetoDois);

// console.log(funcaoFilmesSaida);


// DESAFIO 3.
// let carrinho = [];

// let frutaUm = {
//     nome: "Banana",
//     disponibilidade: true
// };

// let frutaDois = {
//     nome: "Morango",
//     disponibilidade: true
// };

// let frutaTres = {
//     nome: "Pessego",
//     disponibilidade: true
// };

// let funcaoCarrinho = (objetoUm, objetoDois, objetoTres) => {
//     carrinho = [
//         {...objetoUm},
//         {...objetoDois},
//         {...objetoTres},
//     ]
//     return carrinho;
// };

// carrinho = funcaoCarrinho(frutaUm, frutaDois, frutaTres);

// console.log(carrinho);

// let controleEstoque = (frutaVendida) => {
//     frutaVendida[0].disponibilidade = false;
    
//     return carrinho;
// };

// carrinho = controleEstoque(carrinho);

// console.log(carrinho);