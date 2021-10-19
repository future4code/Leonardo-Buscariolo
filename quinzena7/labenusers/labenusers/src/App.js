import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Usuarios from './Usuarios';


const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivFormArea = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;


const DivForm = styled.div`
  display: flex;
  input{
    margin-right: 5px;
  }
`;


export default class App extends React.Component {
  state= {
    listaUsuarios: [],
    inputNome: '',
    inputEmail: '',
    trocaDePagina: false,
  }

  componentDidMount = () => {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: 'leonardo-sofiati-banu'
      }
    }).then((resposta) => {
      this.setState({listaUsuarios: resposta.data})
      console.log(resposta.data)
    }).catch((error) =>{
      console.log(error)
    })
  }

  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: 'leonardo-sofiati-banu'
      }
    }).then((resposta) => {
      this.setState({inputNome: ''})
      this.setState({inputEmail: ''})
      this.pegarUsuarios()
      alert('Usuário criado com sucesso :)')
      console.log(resposta)
    }).catch((error) => {
      console.log(error.message)
      alert('Algo de errado aconteceu :(')
    })
  }

  deletarUsuario = (usuarioId) => {
    if(window.confirm('Tem certeza que deseja deletar?')) {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + usuarioId.toString();

      axios.delete(url, {
        headers: {
          Authorization: 'leonardo-sofiati-banu'
        }
      }).then((resposta) =>{
        this.pegarUsuarios()
        console.log(resposta.data);
        alert('Usuário deletado com sucesso :)')
      }).catch((error) =>{
        console.log(error.message)
        alert('Algo de errado aconteceu :(')
      })
    } else {
      alert('Usuário foi mantido!')
    }
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
    console.log(this.state.inputNome)
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
    console.log(this.state.inputEmail)
  }

  alterarPagina = () => {
    this.setState({trocaDePagina: !this.state.trocaDePagina})
    console.log(this.state.trocaDePagina)
  }

  mostrarPagina = () => {
    if(this.state.trocaDePagina === false){
      return(
        <DivFormArea pagina={this.state}>
        <h2>Criar usuário</h2>
          <DivForm>
          <input 
          placeholder={'Nome'}
          value={this.state.inputNome} 
          onChange={this.onChangeNome}
          />
          <input 
          placeholder={'E-mail'}
          type={'email'}
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
          />
          <button onClick={this.criarUsuario}>Criar</button>
          </DivForm>
        </DivFormArea>
      )
    } else {
      return(
        <Usuarios 
        state={this.state} 
        deletarUsuario={this.deletarUsuario}
        />
      )
    }
  }


  render() {
    return (
      <DivApp>
        <h1>Labenusers</h1>
        <button onClick={this.alterarPagina}>Trocar de página</button>
        {this.mostrarPagina()}
      </DivApp>
    );
  }
}

