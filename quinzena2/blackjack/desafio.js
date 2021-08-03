// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * Preciso criar um array de objetos de cartasUsuario e cartasComputador e colocar as cartas um, dois, tres, e por ai em diante em cada um, para adicionar usando o spread, se não eu fico só criando variaveis infinitamente. Após isso, coloco esse objeto como entrar no iniciarJogada(objeto) para usá-lo la dentro.
//  */

// console.log('Bem vindo ao jogo de Blackjack!');

// let confirmar = confirm("Quer iniciar uma nova rodada?");

// let cartaUmUsuario = comprarCarta();
// let cartaDoisUsuario = comprarCarta();
// let cartaTresUsuario = comprarCarta();

// let cartaUmComputador = comprarCarta();
// let cartaDoisComputador = comprarCarta();
// let cartaTresComputador = comprarCarta();


// let iniciarJogada = () => {
//    if (confirmar === true) { 
//       while ((cartaUmUsuario.texto.includes('A') && cartaUmUsuario.texto.includes('A')) || (cartaUmComputador.texto.includes('A') && cartaDoisComputador.texto.includes('A'))) {
//          console.log('Dois "A" sorteados, iremos realizar um novo sorteio ');
//          cartaUmUsuario = comprarCarta();
//          cartaDoisUsuario = comprarCarta();
//          cartaUmComputador = comprarCarta();
//          cartaDoisComputador = comprarCarta();
//       };
      
//       let confirmar2 = confirm(`Suas cartas são ${cartaUmUsuario.texto +' '+cartaDoisUsuario.texto}. A carta revelada do computador é ${cartaUmComputador.texto}. \nDeseja comprar mais uma carta?` );

//       if (confirmar2 === true) {
//          cartaTresUsuario = comprarCarta();
//          cartaTresComputador = comprarCarta();
//          //colocar os console.log abaixo aqui se clicar em sim, incluindo a terceira carta, se for cancel, deixar eles lá fora e mostrar somente duas cartas, depois preciso arrumar um deixo de incluir isso em um while ou algo assim
//       } else {
//          console.log('Resultados');  
//       }

//       //esses console.log
//       console.log(`Usuário - cartas: ${cartaUmUsuario.texto +' '+cartaDoisUsuario.texto +' '+cartaTresUsuario.texto} - pontuação ${cartaUmUsuario.valor + cartaDoisUsuario.valor + cartaTresComputador.valor}`);
//       console.log(`Computador - cartas: ${cartaUmComputador.texto +' '+ cartaDoisComputador.texto +' '+ cartaTresComputador.texto} - pontuação ${cartaUmComputador.valor + cartaDoisComputador.valor + cartaTresComputador.valor}`);
//    } else {
//       console.log('O jogo acabou');
//    };
// };

// let finalizarJogada = () => {
//    if (confirmar && (cartaUmUsuario.valor + cartaDoisUsuario.valor + cartaTresUsuario.valor) > (cartaUmComputador.valor + cartaDoisComputador.valor + cartaTresComputador.valor)) {
//       console.log('O usuário ganhou!');
//    } else if (confirmar && (cartaUmUsuario.valor + cartaDoisUsuario.valor + cartaTresUsuario.valor) < (cartaUmComputador.valor + cartaDoisComputador.valor + cartaTresComputador.valor)) {
//       console.log('O computador ganhou!');
//    } else if (confirmar && (cartaUmUsuario.valor + cartaDoisUsuario.valor + cartaTresUsuario.valor) === (cartaUmComputador.valor + cartaDoisComputador.valor + cartaTresComputador.valor)) {
//       console.log('Empate')
//    }
// };

// iniciarJogada();
// finalizarJogada();

