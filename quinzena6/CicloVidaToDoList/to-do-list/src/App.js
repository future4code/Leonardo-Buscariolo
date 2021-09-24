
import React from 'react';
import styled from "styled-components"

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
  :hover{
    background-color: lightgray;
  }
  width: 100%;
`;

const TarefaDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

const DivApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: 'Estudar',
        completa: false
      },
    ],
    inputValue: '',
    filtro: ''
  }

componentDidMount() {
  if(localStorage.getItem("id")){
    const arrayTarefasConvertido = JSON.parse(localStorage.getItem("id"));
    this.setState({tarefas: arrayTarefasConvertido})
  }
};
  
componentDidUpdate() {
  localStorage.setItem("id", JSON.stringify(this.state.tarefas));
};

onChangeInput = (event) => {
  this.setState({inputValue: event.target.value})
}

criaTarefa = () => {
  const novaTarefa = [...this.state.tarefas, {id: Date.now(), texto: this.state.inputValue, completa: false}]
  this.setState({tarefas: novaTarefa})
  this.setState({inputValue: '', filtro: ''})
  console.log(this.state.tarefas)
}

selectTarefa = (id) => {
  const idFiltrado = this.state.tarefas.map((tarefa, index, valor) => {
    if(id === tarefa.id){
      const novoValor = {...tarefa, completa: !tarefa.completa}
      return novoValor;
    } else {
      return tarefa;
    }
  })
  this.setState({tarefas: idFiltrado})
}

removerTarefa = (id) => {
  const novaListaTarefa = this.state.tarefas.filter((tarefa) => {
    return tarefa.id !== id;
  });
  this.setState({tarefas: novaListaTarefa})
}

removerTudo = () => {
  const novaListaTarefaTotal = this.state.tarefas.filter((tarefa) => {
    return tarefa.id === this.state.tarefas;
  });
  this.setState({tarefas: novaListaTarefaTotal})
}

onChangeFilter = (event) => {
  this.setState({filtro: event.target.value});
}

render() {
  const listaFiltrada = this.state.tarefas.filter(tarefa => {
    switch (this.state.filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return true
    }
  });

  return (
    <DivApp>
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={this.state.inputValue} onChange={this.onChangeInput}/>
        <button onClick={this.criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br/>

      <InputsContainer>
        <label>Filtro</label>
        <select value={this.state.filtro} onChange={this.onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <TarefaDiv key={tarefa.id}>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <button onClick={() => this.removerTarefa(tarefa.id)}>-</button>
              <button onClick={() => this.editarTarefa(tarefa.id)}>editar</button>
            </TarefaDiv>
          )
        })}
            </TarefaList>
      <button onClick={this.removerTudo}>Remover Tudo</button>
    </DivApp>
  )
}
}

