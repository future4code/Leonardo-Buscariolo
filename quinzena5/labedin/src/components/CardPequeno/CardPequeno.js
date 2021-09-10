import React from 'react';
import styled from 'styled-components';

//Style

const SmallCardContainerDiv = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;
`;

const SmallCardContainerImg = styled.img `
    height: auto;
    width: 30px;
    margin-right: 10px;
`;


const SmallCardContainerH4 = styled.h4 `
    font-size: 16px;
    margin-right: 4px;
`;

const SmallCardContainerP = styled.p `
    font-size: 16px;
`;

// JSX

let CardPequeno = (props) => {
    return (
        <SmallCardContainerDiv className="small-card">
            <SmallCardContainerImg src={props.imagem}/>
            <SmallCardContainerH4>{props.texto}</SmallCardContainerH4>
            <SmallCardContainerP>{props.complemento}</SmallCardContainerP>
        </SmallCardContainerDiv>
    );
}

export default CardPequeno;

