import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import SmallProfileCard from './SmallProfileCard';
import GrupoMais from './images/grupoMais.svg'
import GrupoMenos from './images/grupoMenos.svg'
import AcceptIcon from './images/accept.png'
import CanceltIcon from './images/cancel.png'

const MainAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #d0d0d0;
`;

const MainAreaJalena = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 30vw;
    border: 1px solid black;
    border-radius: 5px;
`;

const MainAreaHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 8%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid lightgrey;
`;

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 15%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const AcceptButton = styled.img`
    height: 65%;
    width: auto;
    cursor: pointer;
    :hover{
        transform:scale(1.2, 1.2);
    }
`;

const ProfileHeader = styled.img`
    cursor: pointer;
    :hover{
        transform:scale(1.2, 1.2);
    }
`;


const MainArea = () => {
    const [profiles, setProfiles] = useState([]);
    const [id, setId] = useState('');
    const [chosenPersonId, setChosenPersonId] = useState('');
    const [notChovenPersonId, setNotChosenPersonId] = useState('');
    const [actualScreen, setActualScreen] = useState('MainArea');

    useEffect(() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-sofiati/person`)
        .then((profile) => {
            setProfiles(profile.data.profile)
            setId(profile.data.profile.id)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [chosenPersonId, notChovenPersonId]);

    const setChosenId = () => {
        setChosenPersonId(id)
    }

    const setNotChosenId = () => {
        setNotChosenPersonId(id)
    }

    useEffect(() => {
        const body = {
            id: chosenPersonId,
            choice: true
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-sofiati/choose-person`, body, {
            headers: {
                ContentType: 'application/json'
            }
        }).then((profile) => {
            console.log(profile.data)
        }).catch((error) =>{
            console.log(error)
        })
    }, [chosenPersonId])

    const changeScreen = () => {
        if(actualScreen === 'MainArea') {
            setActualScreen('MatchArea')
        } else if (actualScreen === 'MatchArea') {
            setActualScreen('MainArea')
        }
    }

    const clearMatches = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-sofiati/clear`, {
            headers: {
                ContentType: 'application/json'
            }
        }).then((profile) => {
            setNotChosenPersonId(profile.data)
            alert('Matches deletados');
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        })
    }

    const actualScreenDisplay = () => {
        switch (actualScreen) {
            case 'MainArea':
                return (
                    <MainAreaJalena>
                        <MainAreaHeader>
                            <ProfileHeader src={GrupoMenos} 
                            onClick={changeScreen}
                            />
                            <h2>astromatch</h2>
                            <ProfileHeader src={GrupoMais} 
                            onClick={changeScreen}
                            />
                        </MainAreaHeader>
                        <ProfileCard 
                        profiles={profiles} 
                        />
                        <ButtonArea>
                            <AcceptButton src={CanceltIcon} 
                            onClick={setNotChosenId}
                            />
                            <AcceptButton src={AcceptIcon} 
                            onClick={setChosenId}
                            />
                        </ButtonArea>
                    </MainAreaJalena>
                )
            case 'MatchArea':
                return (
                    <MainAreaJalena>
                        <MainAreaHeader>
                            <ProfileHeader src={GrupoMenos} 
                            onClick={changeScreen}
                            />
                            <h2>astromatch</h2>
                            <ProfileHeader src={GrupoMais} 
                            onClick={changeScreen}
                            />
                        </MainAreaHeader>
                        <SmallProfileCard />
                    </MainAreaJalena>
                )
            default:
                return (
                    <MainAreaJalena>
                    <MainAreaHeader>
                        <ProfileHeader src={GrupoMenos} />
                        <h2>astromatch</h2>
                        <ProfileHeader src={GrupoMais} />
                    </MainAreaHeader>
                    <ProfileCard 
                    profiles={profiles} 
                    />
                    <ButtonArea>
                        <AcceptButton src={CanceltIcon} 
                        onClick={setNotChosenId}
                        />
                        <AcceptButton src={AcceptIcon} 
                        onClick={setChosenId}
                        />
                    </ButtonArea>
                </MainAreaJalena>
                )
        }
    }

return (
    <MainAreaContainer>
        <MainAreaJalena>
            {actualScreenDisplay()}
        </MainAreaJalena>
        <button onClick={clearMatches}>Limpar histórico de matches</button>
    </MainAreaContainer>
);
}

export default MainArea;