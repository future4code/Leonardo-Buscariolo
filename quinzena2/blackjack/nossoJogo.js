/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de Blackjack!');

let confirmar = confirm("Quer iniciar uma nova rodada?");

let cartaUmUsuario = comprarCarta();
let cartaUmComputador = comprarCarta();
let cartaDoisUsuario = comprarCarta();
let cartaDoisComputador = comprarCarta();

let iniciarJogada = () => {
   if (confirmar == true ) {    
      console.log(`Usuário - cartas: ${cartaUmUsuario.texto +' '+cartaDoisUsuario.texto} - pontuação ${cartaUmUsuario.valor + cartaDoisUsuario.valor}`);
      console.log(`Computador - cartas: ${cartaUmComputador.texto +' '+ cartaDoisComputador.texto} - pontuação ${cartaUmComputador.valor + cartaDoisComputador.valor}`)
   } else {
      console.log('O jogo acabou');
   }
};

let finalizarJogada = () => {
   if (confirmar && (cartaUmUsuario.valor + cartaDoisUsuario.valor) > (cartaUmComputador.valor + cartaDoisComputador.valor)) {
      console.log('O usuário ganhou!');
   } else if (confirmar && (cartaUmUsuario.valor + cartaDoisUsuario.valor) < (cartaUmComputador.valor + cartaDoisComputador.valor)) {
      console.log('O computador ganhou!');
   } else if (confirmar && (cartaUmUsuario.valor + cartaDoisUsuario.valor) === (cartaUmComputador.valor + cartaDoisComputador.valor)) {
      console.log('Empate')
   }
};

iniciarJogada();
finalizarJogada();