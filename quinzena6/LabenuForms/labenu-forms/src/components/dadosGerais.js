import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada";

const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export default class DadosGerais extends React.Component {
  render() {
    return (
      <DivContainer>
        <h1>Etapa 1 - Dados Gerais</h1>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaFechada
          pergunta={"4. Qual sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
          mudarTelaInformacoesFormados={this.props.mudarTelaInformacoesFormados}
          mudarTelaInformacoesNaoFormados={
            this.props.mudarTelaInformacoesNaoFormados
          }
        />
      </DivContainer>
    );
  }
}