import React from 'react';
import styled from 'styled-components';

const BigcardContainerDivPai = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;
`;


const BigcardContainerImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const BigcardContainerH4 = styled.h4 `
    margin-bottom: 15px;
`;

const BigcardContainerDivFilho = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;


function CardGrande(props) {
    return (
        <BigcardContainerDivPai className="bigcard-container">
            <BigcardContainerImg src={ props.imagem } />
            <BigcardContainerDivFilho>
                <BigcardContainerH4>{ props.nome }</BigcardContainerH4>
                <p>{ props.descricao }</p>
            </BigcardContainerDivFilho>
        </BigcardContainerDivPai>
    )
}

export default CardGrande;