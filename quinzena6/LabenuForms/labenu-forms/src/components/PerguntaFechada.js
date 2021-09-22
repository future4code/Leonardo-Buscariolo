import React from "react";
import styled from "styled-components";

export default class PerguntaFechada extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <p>{this.props.pergunta}</p>
            <select name={"escolaridade"}>
              {this.props.opcoes.map((opcoes) => {
                return (
                  <option defaultValue={true} key={opcoes}>
                    {opcoes}
                  </option>
                );
              })}
            </select>
          </label>
          <br />
          <br />
          <button onClick={this.props.mudarTelaInformacoesFormados}>
            Próxima etapa
          </button>
        </form>
      </div>
    );
  }
}
