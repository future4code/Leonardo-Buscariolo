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

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/55'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'leonardo'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />

        <Post
          nomeUsuario={'julia'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
        <SecaoCompartilhar>
        </SecaoCompartilhar>
      </MainContainer>
    );
  }
}

export default App;
