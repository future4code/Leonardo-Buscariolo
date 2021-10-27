import React from "react";
import styled from "styled-components";
import axios from "axios";

const PlayerAreaContainer = styled.div`
  background-color: #181818;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
`;

const AudioArea = styled.audio`
  width: 90vw;
`;


export default class PlayerArea extends React.Component {
  render() {
    console.log('PlayerArea:', this.props.musicaTocandoProps)
    return (
      <PlayerAreaContainer>
        <AudioArea controls>
          <source src={this.props.musicaTocandoProps} type="audio/mpeg" />
        </AudioArea>
      </PlayerAreaContainer>
    )
  }
}
