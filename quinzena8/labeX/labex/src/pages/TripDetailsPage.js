import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";

const ContainerTripDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
  width: 100%;
  h1 {
    margin-bottom: 25px;
  }
`;

const TripDetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    margin-bottom: 10px;
  }
`;

const CandidatesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 2px 10px gray;
  width: 40%;
  padding: 20px;
  margin-bottom: 20px;
  p {
    margin-bottom: 10px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px;
`;

const BackButton = styled.button`
  padding: 10px;
  min-width: 8%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
  :hover {
    background-color: #dae5e8;
  }
`;

const AdminButton = BackButton;

const TripDetailsPage = (tripId) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const approveCandidate = () => {
    alert("Candidato Aprovado!");
  };

  const declineCandidate = () => {
    alert("Candidado Reprovado");
  };
  
  const pathParams = useParams();

  const data = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/trip/${pathParams.id}`, 'getTripDetails', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxxTEUwdU03OFl3NXdOR1J5YXVjIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MzY0MjA0OTJ9.E8SE51f8wyZj0XxQCSb9N6s_7iQkAkIf62qslFyKLrQ"); 
  //depois preciso criar essa autenticação e token conforme aula de hoje 08/11

  const verifyApprovedCandidates = () => {
    if(data?.data.trip.approved.length > 0) {
      data?.data.trip.approved.map((candidato) => {
        return <li>{candidato.name}</li>
      })
    } else {
      return <li>Aida não existem candidatos aprovados</li>
    }
  }

  return (
    <ContainerTripDetails>
      <h1>Nome da Viagem</h1>
      <TripDetailsArea>
        <p>Nome: {data?.data.trip.name}</p>
        <p>Descrição: {data?.data.trip.discription}</p>
        <p>Planeta: {data?.data.trip.planet}</p>
        <p>Duração: {data?.data.trip.durationInDays} dias</p>
        <p>Data: {data?.data.trip.date}</p>
      </TripDetailsArea>
      <BackButton onClick={goBack}>Voltar</BackButton>
      <h1>Candidatos Pendentes</h1>
      {data?.data.trip.candidates.map((candidato) => {
          return (
            <CandidatesCard key={candidato.name}>
            <p>Nome: {candidato.name}</p>
            <p>Profissão: {candidato.profession}</p>
            <p>Idade: {candidato.age}</p>
            <p>País: {candidato.country}</p>
            <p>Texto de Candidatura: {candidato.applicationText}</p>
            <ButtonArea>
              <BackButton onClick={approveCandidate}>Aprovar</BackButton>
              <BackButton onClick={declineCandidate}>Reprovar</BackButton>
            </ButtonArea>
          </CandidatesCard>
          )
        })}
      <h1>Candidatos Aprovados</h1>
      <ul>
        {verifyApprovedCandidates()}
      </ul>
    </ContainerTripDetails>
  );
};

export default TripDetailsPage;
