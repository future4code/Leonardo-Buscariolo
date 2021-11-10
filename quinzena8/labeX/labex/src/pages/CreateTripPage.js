import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CreateTripContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  h1 {
    margin-bottom: 15px;
  }
`;

const FormSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  form,
  input {
    margin-bottom: 15px;
  }
  form,
  select,
  input {
    width: 500px;
  }
  select,
  input {
    padding: 5px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 20px;
`;

const BackButton = styled.button`
  padding: 10px;
  min-width: 30%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const CreateButton = BackButton;

const CreateTripPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const createTrip = () => {
    navigate("/admin/trips/list");
    alert("Viagem criada com sucesso!");
  };

  return (
    <CreateTripContainer>
      <div>
        <h1>Criar Viagem</h1>
      </div>
      <FormSelectContainer>
        <input type="text" placeholder="Nome"></input>
        <form>
          <select name="planets">
            <option value="planet1" defaultValue>
              Escolha um Planeta
            </option>
            <option value="planet1">Planeta 1</option>
            <option value="planet1">Planeta 1</option>
            <option value="planet1">Planeta 1</option>
            <option value="planet1">Planeta 1</option>
            <option value="planet1">Planeta 1</option>
          </select>
        </form>
        <input type="date" placeholder="DD/MM/AAAA"></input>
        <input type="text" placeholder="Descrição"></input>
        <input type="number" placeholder="Duração em dias"></input>
      </FormSelectContainer>
      <ButtonArea>
        <BackButton onClick={goBack}>Voltar</BackButton>
        <CreateButton onClick={createTrip}>Criar</CreateButton>
      </ButtonArea>
    </CreateTripContainer>
  );
};

export default CreateTripPage;
