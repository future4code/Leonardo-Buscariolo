import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProfileCardContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileCardArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url(${(props) => props.imagem});
    background-position: center;
    background-size: cover;
    height: 90%;
    width: 100%;
    color: white;
    margin: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 4px 2px 5px grey;
    p, h2 {
        padding-bottom: 5px;
    }
`;

const ProfileCard = (props) => {
return (
    <ProfileCardContainer>
        <ProfileCardArea imagem={props.profiles.photo}>
        <h2>{props.profiles.name}, {props.profiles.age}</h2>
        <p>{props.profiles.bio}</p>
        </ProfileCardArea>
    </ProfileCardContainer>);
}

export default ProfileCard;