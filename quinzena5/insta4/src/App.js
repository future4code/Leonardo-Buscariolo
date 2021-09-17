import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import {SecaoCompartilhar} from '../src/components/SecaoCompartilhar'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputArea = styled.div`
  display: flex;

`

const InputFiel = styled.input`

`
const InputButton = styled.button`
  
`

class App extends React.Component {
  state = {
    listaDeUsuario: [
      {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/55",
      fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "leonardo",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },

      {
        nomeUsuario: "julia",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

    adicionarPost = () => {
      const novoPost = {
        nomeUsuario: this.state.valorInputNomeUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost,
      };

      const novoPostInserido = [...this.state.listaDeUsuario, novoPost];

      this.setState({listaDeUsuario: novoPostInserido});
      this.setState({
        valorInputNomeUsuario: "",
        valorInputFotoUsuario: "",
        valorInputFotoPost: ""
      });
    }

    onChangeInputNomeUsuario = (event) => {
      this.setState({valorInputNomeUsuario: event.target.value});
    }

    onChangeInputFotoUsuario = (event) => {
      this.setState({valorInputFotoUsuario: event.target.value});
    }

    onChangeInputFotoPost = (event) => {
      this.setState({valorInputFotoPost: event.target.value});
    }

  render() {

    const listaMapeadaUsuario = this.state.listaDeUsuario.map((pessoa) => {
        return (
          <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost} 
          />
        )
    })
    return (
      <MainContainer>
        <InputArea>
          <InputFiel placeholder={'Nome do Usuario'} value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputNomeUsuario}></InputFiel>
          <InputFiel placeholder={'Foto do Usuario'} value={this.state.valorInputFotoUsuario} onChange={this.onChangeInputFotoUsuario}></InputFiel>
          <InputFiel placeholder={'Foto do Post'} value={this.state.valorInputFotoPost} onChange={this.onChangeInputFotoPost}></InputFiel>
          <InputButton onClick={this.adicionarPost}>Adicionar Post</InputButton>
        </InputArea>

        {listaMapeadaUsuario}

        <SecaoCompartilhar>
        </SecaoCompartilhar>
      </MainContainer>
    );
  }
}

export default App;
