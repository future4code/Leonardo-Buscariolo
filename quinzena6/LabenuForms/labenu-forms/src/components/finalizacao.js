import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class Finalizacao extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>O formulário acabou</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </DivContainer>
    );
  }
}
