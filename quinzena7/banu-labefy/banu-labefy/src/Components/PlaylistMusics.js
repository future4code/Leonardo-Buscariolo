import React from "react";
import styled from "styled-components";
import axios from "axios";

const PlaylistMusicsContainer = styled.div`
  background-color: #121212;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  color: white;
`;

const PlaylistMusicstHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
`;

const PlaylistMusicsHeaderInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

export default class PlaylistMusics extends React.Component {
  mostrarListaDeMusica = () => {
    if (this.props.state.detalhesPlaylist.length > 0) {
      return this.props.state.detalhesPlaylist.map((playlist, index) => {
        return (
          <div>
            <li key={playlist.id}>
              {playlist.name} - {playlist.artist}
              <button
              onClick={() => this.props.tocarMusica(playlist.url)}
              >
                Reproduzir</button>
              <button
                key={index}
                onClick={() => this.props.deletarMusicaDaPlaylist(playlist.id)}
              >
                Remover
              </button>
            </li>
            <audio controls>
              <source src={playlist.url} type="audio/mpeg" />
            </audio>
          </div>
        );
      });
    } else {
      return (
        <p>
          Você ainda não adicionou nenhuma música :( Escolha alguma música
          abaixo
        </p>
      );
    }
  };
  render() {
    return (
      <PlaylistMusicsContainer>
        <h2>Detalhes da sua Playlist</h2>
        <PlaylistMusicstHeader>
          <img src={"https://picsum.photos/200/200"} />
          <PlaylistMusicsHeaderInput>
            <p>Playlist</p>
            <h3>{this.props.state.playlistSelecionada.name}</h3>
          </PlaylistMusicsHeaderInput>
        </PlaylistMusicstHeader>
        <div>
          <ul>{this.mostrarListaDeMusica()}</ul>
        </div>
        <div>
          <p>Vamos incrementar sua playlist</p>
          <input
            placeholder={"Nome da música"}
            value={this.props.state.inputMusicName}
            onChange={this.props.onChangeNomeMusica}
          /><br />
          <input
            placeholder={"Nome do artista"}
            value={this.props.state.inputArtistName}
            onChange={this.props.onChangeNomeArtista}
          /><br />
          <input
            placeholder={"Link da música"}
            value={this.props.state.inputTrackUrl}
            onChange={this.props.onChangeTrackUrl}
          /><br />
          <button onClick={this.props.adicionarMusicaNaPlaylist}>
            Adicionar música
          </button>
        </div><br />
      </PlaylistMusicsContainer>
    );
  }
}
