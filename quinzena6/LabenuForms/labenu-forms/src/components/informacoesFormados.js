import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class InformacoesFormados extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <form>
          <label>
            <p>5. Qual curso?</p>
            <input type={"text"} name={"nomeCurso"} />
          </label>
          <label>
            <p>6. Qual a unidade de ensino?</p>
            <input type={"text"} name={"unidadeEnsino"} />
          </label>
          <br />
          <button onClick={this.props.mudarTelaInformacoesNaoFormados}>
            Próxima etapa
          </button>
        </form>
      </DivContainer>
    );
  }
}