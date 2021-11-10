import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 15px;
  }
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: 15px;
    width: 500px;
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

const LoginButton = BackButton;

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goBack = () => {
    navigate("/");
  };

  // const goToAdminArea = () => {
  //   navigate("/admin/trips/list");
  //   //Depois preciso aprender mais sobre validação para validar a criação e tal de logins
  // };

  const onClickLogin = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-sofiati-banu/login', {email, password})
    .then((response) => {
      if(response?.data?.token){
        window.localStorage.setItem("token", response.data.token)
        navigate("/admin/trips/list");
      }
    })
    .catch((err) => {
      alert('Usuário ou senha não encontrados(as), favor contate seu administrador')
    })
  }

  const onChangeEmail= (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <LoginContainer>
      {console.log('email: ',email, 'senha: ', password)}
      <LoginArea>
        <h1>Login</h1>
        <FormArea>
          <input type="email" 
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
          ></input>
          <input type="password" 
          placeholder="Senha"
          value={password}
          onChange={onChangePassword}
          ></input>
        </FormArea>
      </LoginArea>
      <ButtonArea>
        <BackButton onClick={goBack}>Voltar</BackButton>
        <LoginButton onClick={onClickLogin}>Entrar</LoginButton>
      </ButtonArea>
    </LoginContainer>
  );
};

export default LoginPage;
