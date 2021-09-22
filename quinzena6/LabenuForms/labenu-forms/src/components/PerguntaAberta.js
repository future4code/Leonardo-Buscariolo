import React from "react";
import styled from "styled-components";

export default class PerguntaAberta extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <p>{this.props.pergunta}</p>
            <input type={"text"} pergunta={"perguntaAberta"} />
          </label>
        </form>
      </div>
    );
  }
}