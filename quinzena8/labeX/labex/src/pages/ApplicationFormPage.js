import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import Countries from '../assets/Country';

const ApplicationFromContainer = styled.div`
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
  width: 500px;
  margin: 20px;
`;

const BackButton = styled.button`
  padding: 10px;
  min-width: 20%;
  background-color: #708090;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #dae5e8;
  }
`;

const SendButton = BackButton;


const ApplicationFormPage = () => {
  const [tripId, setTripId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [candidateText, setCandidateText] = useState('');
  const [profession, setProfession] = useState('');
  const [country, setCountry] = useState('');

  const data = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/trips", "getTrips"
  );

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  let body = {};

  const sendApplicationForm = () => {
    if (age >= 18) {
      // body = {
      //   name: `${name}`,
      //   age: `${age}`,
      //   applicationText: `${candidateText}`,
      //   profession: `${profession}`,
      //   country: `${country}`
      // }
      alert("Candidatura enviada com sucesso");
      navigate(-1);
      // console.log(body)
      // return body
    } else {
      alert('Você deve ter +18 anos para se candidatar')
    }
  };

    // const verificar = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/trips/${tripId}/apply`, 'applyToTrips', '',body)
  
  const onChangeName = (e) => {
    setName(e.target.value)
  };

  const onChangeAge = (e) => {
    setAge(e.target.value)
  }

  const onChangeText = (e) => {
    setCandidateText(e.target.value)
  }

  const onChangeProfession = (e) => {
    setProfession(e.target.value)
  }

  const onChangeTrips = (e) => {
    setTripId(e.target.value)
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  return (
    <ApplicationFromContainer>
      <div>
        <h1>Inscreva-se para uma viagem</h1>
      </div>
      <FormSelectContainer>
        <form>
          <select 
          name="trips"
          onChange={onChangeTrips}
          >
            <option value="default" defaultValue>
              Escolha uma viagem
            </option>
            {data?.data.trips.map((trip) => {
              return(
                <option key={trip.id} value={trip.id}>{trip.name}</option>
              )
            })}
          </select>
        </form>
        <input 
        type="text" 
        placeholder="Nome"
        value={name}
        onChange={onChangeName}
        ></input>
        <input 
        type="number" 
        placeholder="Idade"
        value={age}
        onChange={onChangeAge}
        ></input>
        <input 
        type="text" 
        placeholder="Texto de Candidatura"
        value={candidateText}
        onChange={onChangeText}
        ></input>
        <input 
        type="text" 
        placeholder="Profissão"
        value={profession}
        onChange={onChangeProfession}
        ></input>
        <form>
          <select 
          name="country"
          onChange={onChangeCountry}
          >
            <option value="default" defaultValue>
              Escolha um País
            </option>
            {Countries?.map((country) => {
              return(
                <option key={country.code} value={country.name}>{country.name}</option>
              )
            })}
          </select>
        </form>
      </FormSelectContainer>
      <ButtonArea>
        <BackButton onClick={goBack}>Voltar</BackButton>
        <SendButton onClick={sendApplicationForm}>Enviar</SendButton>
      </ButtonArea>
    </ApplicationFromContainer>
  );
};

export default ApplicationFormPage;
