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
    margin-bottom: 15px;
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
  const [form, setForm] = useState({name: "", age: "", applicationText: "", profession: "", country: "", tripId:""})

  const data = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/trips", "getTrips"
  );

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/trips/list");
  };


    // const verificar = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/trips/${tripId}/apply`, 'applyToTrips', '',body)
  
  const onChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const cleanFields = () => {
    setForm({name: "", age: "", applicationText: "", profession: "", country: "", tripId:""})
  }

  const handleClick = (e) => {
    e.preventDefault()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/trips/${form.tripId}/apply`, form)
    .then((response) => {
      console.log(response)
      console.log(form)
      alert("Candidatura enviada com sucesso!");
      cleanFields();
    })
    .catch((err) => {
      console.log(err.message)
    })
  }


  return (
    <ApplicationFromContainer>
      <div>
        <h1>Inscreva-se para uma viagem</h1>
      </div>
      <FormSelectContainer>
        <form onSubmit={handleClick}>
          <select 
          name={"tripId"}
          onChange={onChange}
          >
            <option value={form.tripId} defaultValue>
              Escolha uma viagem
            </option>
            {data?.data.trips.map((trip) => {
              return(
                <option key={trip.id} value={trip.id}>{trip.name}</option>
              )
            })}
          </select>
        <input 
        name={"name"}
        type="text" 
        placeholder="Nome"
        value={form.name}
        onChange={onChange}
        ></input>
        <input 
        name={"age"}
        type="number" 
        placeholder="Idade"
        value={form.age}
        onChange={onChange}
        ></input>
        <input 
        name={"applicationText"}
        type="text" 
        placeholder="Texto de Candidatura"
        value={form.applicationText}
        onChange={onChange}
        ></input>
        <input 
        name={"profession"}
        type="text" 
        placeholder="Profissão"
        value={form.profession}
        onChange={onChange}
        ></input>
          <select 
          name={"country"}
          onChange={onChange}
          >
            <option value={form.country} defaultValue>
              Escolha um País
            </option>
            {Countries?.map((country) => {
              return(
                <option key={country.code} value={country.name}>{country.name}</option>
              )
            })}
          </select>
        <ButtonArea>
          <SendButton onClick={handleClick}>Enviar</SendButton>
        </ButtonArea>
        </form>
      </FormSelectContainer>
        <ButtonArea>
          <BackButton onClick={goBack}>Voltar</BackButton>
        </ButtonArea>
    </ApplicationFromContainer>
  );
};

export default ApplicationFormPage;
