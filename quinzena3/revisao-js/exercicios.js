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
// const pessoa = {
// 	nome: "Astrodev",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }

// function anonimizaPessoa(pessoa) {
//   pessoa.nome = "ANÔNIMO"
  
//   return pessoa;
// }

// anonimizaPessoa(pessoa);

// EXERCÍCIO 16A
// let arrayDePessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ];

// function maioresDe18(arrayDePessoas) {
//   let pessoasMaioresDe18 = [];

//   for(index of arrayDePessoas) {
//     if(index.idade >= 18) {
//       pessoasMaioresDe18.push(index);
      
//     }
//   }
//   return pessoasMaioresDe18;
// }

// maioresDe18(arrayDePessoas);


// EXERCÍCIO 16B
// let arrayDePessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ];

// function menoresDe18(arrayDePessoas) {
//   let pessoasMenoresDe18 = [];

//   for(index of arrayDePessoas) {
//     if(index.idade < 18) {
//       pessoasMenoresDe18.push(index);
      
//     }
//   }
//   return pessoasMenoresDe18;
// }

// menoresDe18(arrayDePessoas);

// EXERCÍCIO 17A
// const array = [1, 2, 3, 4, 5, 6]

// function multiplicaArrayPor2(array) {
//     let array2 = [];

//     for (let num of array) {
//         array2.push(num*2);
//     }
//     return array2;
// }

// multiplicaArrayPor2(array);

// EXERCÍCIO 17B

// const array = [1, 2, 3, 4, 5, 6]

// function multiplicaArrayPor2S(array) {
//     let array2 = [];
//     let array3 = [];

//     for (let num of array) {
//         array2.push(num*2);
//     }

//     for (let num2 of array2) {
//         array3.push(num2.toString());
//     }
//     return array3;
// }

// multiplicaArrayPor2S(array);

// EXERCÍCIO 17C
// const array = [1, 2, 3, 4, 5, 6]

// function verificaParidade(array) {
//     let array2 = [];
//     let par;
//     let impar;

//     for (let num of array) {
//         if(num % 2 === 0) {
//             array2.push(`${num} é par`);
//         } else {
//             array2.push(`${num} é ímpar`);
//         };
//     }
//     return array2;
// // }

// verificaParidade(array);

// EXERCÍCIO 18A
// const pessoas = [
// 	{ nome: "A", idade: 12, altura: 1.8},
// 	{ nome: "B", idade: 20, altura: 1.3},
// 	{ nome: "C", idade: 15, altura: 1.9},
// 	{ nome: "D", idade: 22, altura: 1.8},
// 	{ nome: "E", idade: 10, altura: 1.2},
// 	{ nome: "F", idade: 70, altura: 1.9}
// ]

// function retornaPessoasAutorizadas(pessoas) {
//     let pessoaAutorizada = [];

//     for(let autorizada of pessoas) {
//         if (autorizada.idade > 14 && autorizada.idade < 60 && autorizada.altura >= 1.5) {
//             pessoaAutorizada.push(autorizada);
//         }
//     }
//     return pessoaAutorizada;
// }

// retornaPessoasAutorizadas(pessoas);

// EXERCÍCIO 18B
// const pessoas = [
// 	{ nome: "A", idade: 12, altura: 1.8},
// 	{ nome: "B", idade: 20, altura: 1.3},
// 	{ nome: "C", idade: 15, altura: 1.9},
// 	{ nome: "D", idade: 22, altura: 1.8},
// 	{ nome: "E", idade: 10, altura: 1.2},
// 	{ nome: "F", idade: 70, altura: 1.9}
// ]

// function retornaPessoasNaoAutorizadas(pessoas) {
//     let pessoaNaoAutorizada = [];
//     let pessoaAutorizada = [];

//     for(let autorizada of pessoas) {
//         if (autorizada.idade > 14 && autorizada.idade < 60 && autorizada.altura >= 1.5) {
//             pessoaAutorizada.push(autorizada);
//         } else {
//             pessoaNaoAutorizada.push(autorizada);
//         };
//     };
//     return pessoaNaoAutorizada;
// }

// retornaPessoasNaoAutorizadas(pessoas);

// EXERCÍCIO 19A
// const consultas = [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
//]
  
// function ordenaPorNome(consultasNome) {
//     consultasNome.sort(function(a,b) {
//         return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
//     });
//     return consultasNome;
// }

// ordenaPorNome(consultas);

// EXERCÍCIO 19B
// const consultas = [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
// ]
// function ordenaPorData(consultasData) {
//     let novoArray = [];

//     for(let data of consultasData) {
//         //alterando data em string para TimeStamp
//         let dataCompleta = data.dataDaConsulta.split('/');
//         let dia = Number(dataCompleta[0]);
//         let mes = Number(dataCompleta[1] - 1);
//         let ano = Number(dataCompleta[2]);
//         let diaConsultaFinal = new Date(ano, mes, dia);
//         let timeStmp = diaConsultaFinal.getTime();
//         data.dataDaConsulta = new Date(timeStmp) 
//     };
//     consultasData.sort(function(a,b) {
//         return a.dataDaConsulta < b.dataDaConsulta ? -1 : a.dataDaConsulta > b.dataDaConsulta ? 1 : 0;
//     });
//         //alterando data TimeStamp para string de volta
//     for(let data2 of consultasData) {
//         data2.dataDaConsulta = data2.dataDaConsulta.toString();
//         let dataCompleta2 = data2.dataDaConsulta.split(' ')
//         dataCompleta2.shift();
//         dataCompleta2.splice(3, 6);

//         switch (dataCompleta2[0]) {
//             case "Jan":
//                 dataCompleta2[0] = "01"
//                 break;
//             case "Feb":
//                 dataCompleta2[0] = "02"
//                 break;
//             case "Mar":
//                 dataCompleta2[0] = "03"
//                 break;
//             case "Apr":
//                 dataCompleta2[0] = "04"
//                 break;
//             case "May":
//                 dataCompleta2[0] = "05"
//                 break;
//             case "Jun":
//                 dataCompleta2[0] = "06"
//                 break;
//             case "Jul":
//                 dataCompleta2[0] = "07"
//                 break;
//             case "Aug":
//                 dataCompleta2[0] = "08"
//                 break;
//             case "Sep":
//                 dataCompleta2[0] = "09"
//                 break;
//             case "Oct":
//                 dataCompleta2[0] = "10"
//                 break;
//             case "Nov":
//                 dataCompleta2[0] = "11"
//                 break;
//             case "Dec":
//                 dataCompleta2[0] = "12"
//                 break;
//         }

//         data2.dataDaConsulta = `${dataCompleta2[1]}/${dataCompleta2[0]}/${dataCompleta2[2]}`
//     }
//     return consultasData;
// }   

// ordenaPorData(consultas);

// EXERCÍCIO 20
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function calculaSaldo(contas) {
    for (let contaCliente of contas) {
        let gastosCliente = 0;

        for (gastoIndividual of contaCliente.compras) {
            gastosCliente =  gastosCliente + gastoIndividual;
        }
        contaCliente.saldoTotal = contaCliente.saldoTotal - gastosCliente;
    }
    return contas;
}

calculaSaldo(contas);
