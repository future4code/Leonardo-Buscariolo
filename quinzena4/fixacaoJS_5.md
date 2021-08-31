```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

    let novoArrayAnimais = [];

    let arrayAnimais = (valor, index, array) => {
        return valor.nome;
    }

    novoArrayAnimais = animais.map(arrayAnimais);
    return novoArrayAnimais;
}

```
