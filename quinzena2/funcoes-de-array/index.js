// ------------ Exercicios de interpretação de código ------------
//1. 
//a) será impresso:
// { nome: "Amanda Rangel", apelido: "Mandi" } - valor, 0 - index (3) [{…}, {…}, {…}] - array completo
// { nome: "Laís Petra", apelido: "Laura" } - valor, 1 - index > [{…}, {…}, {…}] - array completo
// { nome: "Letícia Chijo", apelido: "Chijo" } - valor, 2 - index > [{…}, {…}, {…}] - array completo


//2.
//a) será impresso:
// ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


//3.
//a) será impresso os dois primeiros itens do array num novo array (dois objetos num array)
// 0: {nome: "Amanda Rangel", apelido: "Mandi"}
// 1: {nome: "Laís Petra", apelido: "Laura"}
// ~~ retirando o que tiver com "Chijo" no apelido



// ------------ Exercícios de escrita de código ------------
// ------------ EXERCICIO 1 ------------

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a)
//  let mapearNome = (valor, index, array) => {
//     return valor.nome;
//  };

//  let saidaNome = pets.map(mapearNome);

//  console.log(saidaNome);

 //b)

//  let mapearRaca = (valor, index, array) => {
//     return valor.raca === 'Salsicha'
//  };

//  let saidaRaca = pets.filter(mapearRaca);

//  let mapearSalsicha = (valor, index, array) => {
//     return valor;
//  };

//  let apenasSalsicha = saidaRaca.map(mapearSalsicha);

//  console.log(apenasSalsicha);

 //c)

//  let filtrarPoodle = (valor, index, array) => {
//         return valor.raca === 'Poodle';
//  };

//  let saidaPoodle = pets.filter(filtrarPoodle);

//  let mapearPoodle = (valor, index, array) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${valor.nome}`
//  };

//  let mensagemDesconto = saidaPoodle.map(mapearPoodle);

//  console.log(mensagemDesconto);


// ------------ EXERCICIO 2 ------------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
//  let nomeProdutos = (valor, index, array) => {
//     return valor.nome;
//  };

//  let saidaNomeProdutos = produtos.map(nomeProdutos);
//  console.log(saidaNomeProdutos);


 //b)
//  let descontoProdutos = (valor, index, array) => {
//     let valorSemDesconto = valor.preco;
//     let valorDeDesconto = valorSemDesconto * 0.05
//     let valorComDesconto = valorSemDesconto - valorDeDesconto
//     return valorComDesconto.toFixed(2);
//  };

//  let saidaDescontoProdutos = produtos.filter(descontoProdutos);
//  console.log(saidaDescontoProdutos);


//c)
// let bebidas = (valor, index, array) => {
//     return valor.categoria === "Bebidas";
// };

// let saidaBebidas = produtos.filter(bebidas);
// console.log(saidaBebidas);


// d)
// let marcaYpe = (valor, index, array) => {
//     return valor.nome.includes('Ypê');
// };

// let saidaYpe = produtos.filter(marcaYpe);
// console.log(saidaYpe);


//e)

let marcaYpe = (valor, index, array) => {
    return valor.nome.includes('Ypê');
};

let saidaYpe = produtos.filter(marcaYpe);

let novoArrayYpe = (valor, index, array) => {
    return `Compre ${valor.nome} por R$${valor.preco}`;
};

let novoArray = saidaYpe.map(novoArrayYpe);
console.log(novoArray);


