import React from "react";
import styled from "styled-components";
import DadosGerais from "./components/dadosGerais";
import InformacoesFormados from "./components/informacoesFormados";
import InformacoesNaoFormados from "./components/informacoesNaoFormados";
import Finalizacao from "./components/finalizacao";

const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "DadosGerais"
  };

  mostrarTela = () => {
    switch (this.state.telaAtual) {
      case "DadosGerais":
        return (
          <DadosGerais
            mudarTelaInformacoesFormados={this.mudarTelaInformacoesFormados}
            mudarTelaInformacoesNaoFormados={
              this.mudarTelaInformacoesNaoFormados
            }
          />
        );
      case "InformacoesFormados":
        return (
          <InformacoesFormados
            mudarTelaInformacoesNaoFormados={
              this.mudarTelaInformacoesNaoFormados
            }
          />
        );
      case "InformacoesNaoFormados":
        return (
          <InformacoesNaoFormados
            mudarTelaFinalizacao={this.mudarTelaFinalizacao}
          />
        );
      case "Finalizacao":
        return <Finalizacao />;
      default:
        return (
          <DadosGerais
            mudarTelaInformacoesFormados={this.mudarTelaInformacoesFormados}
          />
        );
    }
  };

  mudarTelaInformacoesFormados = () => {
    this.setState({ telaAtual: "InformacoesFormados" });
  };

  mudarTelaInformacoesNaoFormados = () => {
    this.setState({ telaAtual: "InformacoesNaoFormados" });
  };

  mudarTelaFinalizacao = () => {
    this.setState({ telaAtual: "Finalizacao" });
  };

  render() {
    return (
      <DivContainer>
        <h1>Labenu Forms</h1>
        {this.mostrarTela()}
      </DivContainer>
    );
  }
}

