import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContainerHome = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100vh;
  width: 100%;
  background-image: url("https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg");
  background-position: center;
  background-size: cover;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin: 20px;
`;

const TravelButton = styled.button`
  padding: 10px;
  min-width: 8%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const AdminButton = TravelButton;

const Home = () => {
  const navigate = useNavigate();

  const goToTrips = () => {
    navigate("/trips/list");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <ContainerHome>
      <h1>LabeX</h1>
      <ButtonArea>
        <TravelButton onClick={goToTrips}>Ver Viagens</TravelButton>
        <AdminButton onClick={goToLogin}>Área de Admin</AdminButton>
      </ButtonArea>
    </ContainerHome>
  );
};

export default Home;
