// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const alturaRet = prompt('Digite a altura para um retângulo');
  const larguraRet = prompt('Digite a altura para um retângulo');

  console.log(Number(alturaRet*larguraRet));
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Em que ano estamos?');
  const anoNascimento = prompt('Qual ano você nasceu?');

  console.log(Number(anoAtual-anoNascimento));
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Quatos quilos você tem? (em quilos)');
  const altura = prompt('Qual sua altura? (em metros)');

  console.log(Number(peso/(altura*altura)));
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Qual o seu nome?');
  const idade = prompt('Quantos anos você tem?');
  const email = prompt('Digite seu e-mail');

  console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".");

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  const primeiraCor = prompt('Ditite sua cor favorita');
  const segundaCor = prompt('Ditite sua segunda cor favorita');
  const terceiraCor = prompt('Ditite sua terceira cor favorita');

  const coresFavoritas = [primeiraCor, segundaCor, terceiraCor];
  console.log(coresFavoritas);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const stringUsuario = prompt("Olá, tudo bem?");
  const letraMaiuscula = stringUsuario.toUpperCase();

  console.log(letraMaiuscula);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = prompt('Quanto custa realizar uma noite de espetáculo para o circo?');
  const vendaIngresso = prompt('Por quantos reais vocês vendem o ingresso?');

  const custoPorIngresso = custoEspetaculo/vendaIngresso;
  const vendaMinima = custoPorIngresso;

  console.log(Number(vendaMinima));
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const stringUm = prompt('Digite algo');
  const stringDois = prompt('Digite outra coisa');

  if (stringUm.length === stringDois.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const stringUm = prompt('Digite algo');
  const stringDois = prompt('Digite algo');

  const resultadoUm = stringUm.toLowerCase();
  const resultadoDois = stringDois.toLowerCase();

  if(resultadoUm === resultadoDois) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = prompt('Em que ano estamos?');
  const anoNascimento = prompt('Em que ano você nasceu?');
  const anoId = prompt('Em que ano sua identidade (RG) foi emitida?');
  
  const idadeAte20 = Number(anoAtual - anoNascimento);
  const validadeIdAte20 = Number(anoAtual - anoId);

  const idadeAte50 = Number(anoAtual - anoNascimento);
  const validadeIdAte50 = Number(anoAtual - anoId);

  const idadeAcima50 = Number(anoAtual - anoNascimento);
  const validadeIdAcima50 = Number(anoAtual - anoId);

  if (idadeAte20 <= 20 && validadeIdAte20 >= 5) {
    console.log(true)
  } else if (idadeAte50 >= 20 && idadeAte50 <= 50 && validadeIdAte50 >= 10) {
    console.log(true)
  } else if (idadeAcima50 > 50 && validadeIdAcima50 > 15) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = prompt("Digite um ano");
  const anoSelecionado = Number(ano);

  if (anoSelecionado%400 == 0) {
    console.log(true)
  } else if (anoSelecionado%4 == 0 && anoSelecionado%100 != 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade = prompt("Você tem mais de 18 anos?");
  let escolaridade = prompt("Você possui ensino médio completo?");
  let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  idadePadrao = idade.toLowerCase()
  escolaridadePadrao = escolaridade.toLowerCase()
  horarioPadrao = horario.toLowerCase()

  if (idadePadrao === "sim" && escolaridadePadrao ==="sim" && horarioPadrao === "sim") {
    console.log(true);
  } else {
    console.log(false);
  }
}