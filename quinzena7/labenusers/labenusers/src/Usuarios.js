import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivUl = styled.ul`
    display: flex;
    flex-direction: column;
`;

const DivListaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    li{ 
        margin-right: 8px;
    }
`;


export default class Usuarios extends React.Component {
render() {
    return (
        <DivUsuarios>
            <h2>Lista de Usuários</h2>
            <DivUl>
                {this.props.state.listaUsuarios.map((usuario, index) => {
                    return (
                    <DivListaContainer key={index+1}>
                        <li key={index}>{usuario.name}</li>
                        <button 
                        key={usuario.id}
                        onClick={() => this.props.deletarUsuario(usuario.id)}
                        >Delete</button>
                    </DivListaContainer>
                    )
                })}
            </DivUl>
        </DivUsuarios>
    );
    }
}