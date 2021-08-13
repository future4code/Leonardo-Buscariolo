// let arrayAleatorio = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// EXERCÍCIO 01

// function inverteArray(array) {
//   return array.reverse()

// }

// inverteArray(arrayAleatorio)

// EXERCÍCIO 02

// let arrayAleatorio = [1,2,3,4,5,6]

// function retornaNumerosParesElevadosADois(array) {

//   let segundoArray = []

//   for (let i = 0; i < array.length; i++){
//     let valorArray = array[i];
//     if(valorArray %2 === 0) {
//       segundoArray.push(valorArray*valorArray);
//     }    
//   }
//   return segundoArray
// }

// retornaNumerosParesElevadosADois(arrayAleatorio)

// EXERCÍCIO 03
// let primeiroArray = [1,2,3,4,5,6,7,8]

// function retornaNumerosPares(array) {
//   let segundoArray = []
//   for(let novoIndex of array) {
//     if(novoIndex % 2 === 0){
//       segundoArray.push(novoIndex);
//     }
//   }
//   return(segundoArray)
// }

// retornaNumerosPares(primeiroArray)

// EXERCÍCIO 04
// let arrayMaior = [1,2,3,4,5,6,7]

// function retornaMaiorNumero(array) {
//   let maiorNumero = 0;
//   for (let numero of array) {
//     if(numero > maiorNumero) {
//       maiorNumero = numero;
//     }
//   }
//   return maiorNumero
// }

// retornaMaiorNumero(arrayMaior)

// EXERCÍCIO 05
// let arrayParametro = ["Azul","Amarelo","Vermelho"]

// function retornaQuantidadeElementos(array) {
//   return array.length
// }

// retornaQuantidadeElementos(arrayParametro);

// EXERCÍCIO 06
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 
// const booleano4 = !booleano3 

// function retornaExpressoesBooleanas() {
  
//   let booleanoAFunction = () => {
//     if (booleano1 && booleano2 && !booleano4) {
//       return true
//     } else {
//       return false
//     }
//   };
  
//   let booleanoBFunction = () => {
//     if ((booleano1 && booleano2) || !booleano3) {
//       return true
//     } else {
//       return false
//     } 
//   };

//   let booleanoCFunction = () => {
//     if ((booleano2 || booleano3) && (booleano4 || booleano1)) {
//       return true
//     } else {
//       return false
//     } 
//   };

//   let booleanoDFunction = () => {
//     if (!(booleano2 && booleano3) || !(booleano1 && booleano3)) {
//       return true
//     } else {
//       return false
//     }
//   };

//   let booleanoEFunction = () => {
//     if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)) {
//       return true
//     } else {
//       return false
//     }
//   };


//   return arrayBooleano = [booleanoAFunction(), booleanoBFunction(), booleanoCFunction(), booleanoDFunction(), booleanoEFunction()];

// // }

// retornaExpressoesBooleanas();

// EXERCÍCIO 07

// let numeroParametro = [3]

// function retornaNNumerosPares(n) {
//   let segundoArray = [];

//   for (let i = 0; i < n; i++ ) {
//     segundoArray.push(i*2)
//   }
//   return segundoArray
// }

// retornaNNumerosPares(numeroParametro);

// EXERCÍCIO 08

// let lado1 = 3
// let lado2 = 4
// let lado3 = 5

// function checaTriangulo(a, b, c) {
//   if((a === b) && (b === c)) {
//     return 'Equilátero'
//   } else if((a === b) || (b === c) || (a === c)) {
//     return 'Isósceles'
//   } else if((a !== b) && (b !== c) && (a !== c)) {
//     return 'Escaleno'
//   }
// }

// checaTriangulo(lado1, lado2, lado3)

// EXERCÍCIO 09

// let num1 = 15;
// let num2 = 30;

// function comparaDoisNumeros(num1, num2) {

//   let objeto = {
//     maiorNumero: null,
//     maiorDivisivelPorMenor: null,
//     diferenca: null,
//   }

//   let menorNumero = null;

//   //maiorNumero
//   if(num1 > num2) {
//      objeto.maiorNumero = num1;
//   } else if (num1 < num2){
//      objeto.maiorNumero = num2;
//   } else if (num1 === num2) {
//     objeto.maiorNumero = num1;
//   }

//   //menorNumero
//   if(num1 < num2) {
//     menorNumero = num1;
//   } else if (num1 > num2){
//     menorNumero = num2;
//   } else if (num1 === num2) {
//     menorNumero = num1;
//   }
 
//   //divisão
//   if(objeto.maiorNumero % menorNumero === 0) {
//     objeto.maiorDivisivelPorMenor = true;
//   } else {
//     objeto.maiorDivisivelPorMenor = false;
//  }
//   //diferenca
//   if((objeto.maiorNumero !== menorNumero) || (objeto.maiorNumero === menorNumero)) {
//     objeto.diferenca = objeto.maiorNumero - menorNumero
//   } else {
//     objeto.maiorNumero = 0;
//   }

//   return objeto

// }

// comparaDoisNumeros(num1, num2);

// EXERCÍCIO 10

// let array = [22,33];

// function segundoMaiorEMenor(array) {
//   let menorNumero = Math.min(...array);
//   let maiorNumero = Math.max(...array);
//   let indexMaiorNumero = array.indexOf(maiorNumero)
//   let indexMenorNumero = array.indexOf(menorNumero)
//   let segundoArray = []

//   if (array.length <= 2) {
//     return [menorNumero, maiorNumero]
//   } else {
//   //Maior e Menor Numero
//   array.splice(indexMaiorNumero, 1)
//   array.splice(indexMenorNumero, 1)

//   segundoArray = [...array]

//   //Segundo Maior e Menor Numero
//   let segundoMenorNumero = Math.min(...segundoArray);
//   let segundoMaiorNumero = Math.max(...segundoArray);

//   return [segundoMaiorNumero, segundoMenorNumero]
//   }
  
// };

// segundoMaiorEMenor(array);

// EXERCÍCIO 11
// let ordemCrescente = [36,12,56,7,3]

// function ordenaArray(array) {
//   var length = array.length;  
//     for (var i = 0; i < length; i++) { 
//           for (var j = 0; j < (length - i - 1); j++) { 
//                    if(array[j] > array[j+1]) {
//                            var tmp = array[j]; 
//                 array[j] = array[j+1]; 
//                 array[j+1] = tmp; 
//             }
//         }     
//     }
//     return array; 
// }
// ordenaArray(ordemCrescente);


// EXERCÍCIO 12
// function filmeFavorito() {
//   let filmeFavorito = {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//   };

//   return filmeFavorito;
// }

// EXERCÍCIO 13
// function imprimeChamada() {
//   let filmeFavorito = {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//   };
    
//   return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`
// }

// EXERCÍCIO 14
// function criaRetangulo(lado1, lado2) {

//   let informacoesTriangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2*(lado1 + lado2),
//     area: lado1 * lado2,
//   }

//   return informacoesTriangulo;

// }

// criaRetangulo(lado1, lado2);

// EXERCÍCIO 15
const pessoa = {
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO"
  
  return pessoa;
}

anonimizaPessoa(pessoa);

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
