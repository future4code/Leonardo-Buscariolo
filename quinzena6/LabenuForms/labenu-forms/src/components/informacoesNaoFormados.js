import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class InformacoesNaoFormados extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>Etapa 3 - Informações gerais de ensino</h1>
        <form>
          <label>
            <p>5. Por que você não terminou o curso de graduação?</p>
            <input type={"text"} name={"motivoNaoFinalizado"} />
          </label>
          <label>
            <p>6. Você fez algum curso complementar?</p>
            <select name={"cursoComplementar"}>
              <option selected>Nenhum</option>
              <option>Curso técnico</option>
              <option>Curso de inglês</option>
            </select>
          </label>
          <br />
          <button onClick={this.props.mudarTelaFinalizacao}>
            Próxima etapa
          </button>
        </form>
      </DivContainer>
    );
  }
}