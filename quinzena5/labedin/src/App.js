import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemPerfil from './components/img/user-profile.jpg';
import email from './components/img/email.png';
import adress from './components/img/localizacao.png';

const GlobalStyled = createGlobalStyle `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const AppDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainerDiv = styled.div `
  width: 40vw;
  margin: 10px 0;
`;

const PageSectionContainerH2 = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;


function App() {
  return (
    <AppDiv className="App">
      <GlobalStyled />
      <PageSectionContainerDiv className="page-section-container">
        <PageSectionContainerH2>Dados pessoais</PageSectionContainerH2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Leonardo Sofiati Buscariolo" 
          descricao="Sou Bacharel em Administração com ênfase em Comércio Exterior pela PUC-Campinas. Atualmente sou Sales Support Analyst na DHL Global Forwarding. Buscando uma transição de carreira, venho estudando programação voltada para desenvolvimento Front-End na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainerDiv>

      <PageSectionContainerDiv className="page-section-container">
        <CardPequeno 
          imagem={email}
          texto="Email:"
          complemento="leonardo.sofiati17@gmail.com"
        />
        
        <CardPequeno 
          imagem={adress}
          texto="Endereço:"
          complemento="Vinhedo - SP"
        />
      </PageSectionContainerDiv>

      <PageSectionContainerDiv className="page-section-container">
        <PageSectionContainerH2>Experiências profissionais</PageSectionContainerH2>
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2015/12/dhl-logo-0-1.png" 
          nome="DHL" 
          descricao="Hoje, atuo como Sales Support Analyst na DHL Global Forwarding, responsável por atendimento ao cliente e elaboração de propostas comerciais para movimentação de cargas em todos os modais de transporte. Também tive passagem com produto aéreo, entrando em contato com as companhias aéreas para elaboração de cotações." 
        />
        
        <CardGrande 
          imagem="https://www.ultratontrailer.com/uploads/image/20200527/zf-announces-the-acquisition-of-wabco.jpg" 
          nome="ZF WABCO" 
          descricao="Anteriormente a DHL, realizei estágio na área de Compras na WABCO (atual ZF Group), atuando com materiais indiretos no setor automotivo. Minha primeira experiência profissional foi como assistente administrativo no setor fiscal e contábil na empresa MG6 Assessoria Empresarial, onde desenvolvi autonomia e senso de responsabilidade." 
        />
      </PageSectionContainerDiv>

      <PageSectionContainerDiv className="page-section-container">
        <PageSectionContainerH2>Portifólio</PageSectionContainerH2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/38/38401.png" 
          nome="Github" 
          descricao="Link do portifólio" 
        />
        
      </PageSectionContainerDiv>

      <PageSectionContainerDiv className="page-section-container">
        <PageSectionContainerH2>Competências</PageSectionContainerH2>
        <CardGrande 
          imagem="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" 
          nome="CSS" 
          descricao="Nivel - Avançado" 
        />
        
        <CardGrande 
          imagem="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" 
          nome="HTML" 
          descricao="Nivel - Avançado" 
        />

        <CardGrande 
          imagem="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" 
          nome="JavaScript" 
          descricao="Nivel - Intermediário" 
        />

        <CardGrande 
          imagem="https://img.stackshare.io/service/1020/OYIaJ1KK.png" 
          nome="React JS" 
          descricao="Nivel - Iniciante" 
        />
      </PageSectionContainerDiv>

      <PageSectionContainerDiv className="page-section-container">
        <PageSectionContainerH2>Minhas redes sociais</PageSectionContainerH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainerDiv>
    </AppDiv>
  );
}

export default App;
