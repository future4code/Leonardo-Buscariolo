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
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 
const booleano4 = !booleano3 

function retornaExpressoesBooleanas() {
  
  let booleanoAFunction = () => {
    if (booleano1 && booleano2 && !booleano4) {
      return true
    } else {
      return false
    }
  };
  
  let booleanoBFunction = () => {
    if ((booleano1 && booleano2) || !booleano3) {
      return true
    } else {
      return false
    } 
  };

  let booleanoCFunction = () => {
    if ((booleano2 || booleano3) && (booleano4 || booleano1)) {
      return true
    } else {
      return false
    } 
  };

  let booleanoDFunction = () => {
    if (!(booleano2 && booleano3) || !(booleano1 && booleano3)) {
      return true
    } else {
      return false
    }
  };

  let booleanoEFunction = () => {
    if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)) {
      return true
    } else {
      return false
    }
  };


  return arrayBooleano = [booleanoAFunction(), booleanoBFunction(), booleanoCFunction(), booleanoDFunction(), booleanoEFunction()];

}

retornaExpressoesBooleanas();

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

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
