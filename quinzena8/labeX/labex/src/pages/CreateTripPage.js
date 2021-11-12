import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import planets from "../assets/Planets";

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
  useProtectedPage();

  const [tripName, setTripName] = useState('');
  const [tripPlanet, setTripPlanet] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [tripDiscription, setTripDiscription] = useState('');
  const [tripDuration, setTripDuration] = useState('');
  
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const createTrip = () => {
    navigate("/admin/trips/list");
    alert("Viagem criada com sucesso!");
  };

  const onChangeName = (e) => {
    setTripName(e.target.value)
  } 

  const onChangePlanet = (e) => {
    setTripPlanet(e.target.value)
  } 
  const onChangeDate = (e) => {
    setTripDate(e.target.value)
  } 

  const onChangeDiscription = (e) => {
    setTripDiscription(e.target.value)
  } 

  const onChangeDuration = (e) => {
    setTripDuration(Number(e.target.value))
  } 

  return (
    <CreateTripContainer>
      {console.log(tripName)}
      {console.log(tripPlanet)}
      {console.log(tripDate)}
      {console.log(tripDiscription)}
      {console.log(tripDuration)}
      <div>
        <h1>Criar Viagem</h1>
      </div>
      <FormSelectContainer>
        <input type="text" 
        placeholder="Nome"
        value={tripName}
        onChange={onChangeName}
        ></input>
        <form>
          <select name="planets"
          onChange={onChangePlanet}
          >
            <option value="default" defaultValue>
              Escolha um Planeta
            </option>
              {planets?.map((planets) => {
                return(
                  <option key={planets.position} value={planets.name}>{planets.name}</option>
                )
            })}
          </select>
        </form>
        <input type="date" placeholder="DD/MM/AAAA"
        value={tripDate}
        onChange={onChangeDate}
        ></input>
        <input type="text" placeholder="Descrição"
        value={tripDiscription}
        onChange={onChangeDiscription}
        ></input>
        <input type="number" placeholder="Duração em dias"
        value={tripDuration}
        onChange={onChangeDuration}
        ></input>
      </FormSelectContainer>
      <ButtonArea>
        <BackButton onClick={goBack}>Voltar</BackButton>
        <CreateButton onClick={createTrip}>Criar</CreateButton>
      </ButtonArea>
    </CreateTripContainer>
  );
};

export default CreateTripPage;
