import React, {Component} from 'react'
import styled from 'styled-components'
import iconeFacebook from '../img/facebook.png'
import iconeInstagram from '../img/instagram.png'
import iconetwitter from '../img/twitter.png'

const AreaCompartilhar = styled.div `
    display: none;
    flex-direction:column;
    z-index: 999;
    height: 300px;
    width: 400px;
    position: absolute;
    border: 1px solid black;
    border-radius: 20px;
    background-color: white;
` 

const AreaImagem = styled.div `
    display: flex;
    width: 100%;
    border-bottom: 1px solid black;
    cursor: pointer;
    :hover {
        background-color:lightgrey;
        
    }
` 
const AreaH4 = styled.h4`
	margin-left: 120px;
`
const IconImage = styled.img`
	margin-right: 5px;
    height: 40px;
    width:40px;
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: 20px;
`
const AreaP = styled.p`
	margin-left: 5px;
`
export class SecaoCompartilhar extends Component {

    render() {
        return(
            <AreaCompartilhar>
                <AreaImagem>
                    <AreaH4>Compartilhar em...</AreaH4>
                </AreaImagem>
                <AreaImagem>
                    <IconImage alt={'Icone'} src={iconeFacebook} onClick={this.props.onClickCompartilhar}/>
                    <AreaP>Compartilhar em Facebook</AreaP>
                </AreaImagem>
                <AreaImagem>
                    <IconImage alt={'Icone'} src={iconeInstagram} onClick={this.props.onClickCompartilhar}/>
                    <AreaP>Compartilhar em Instagram</AreaP>
                </AreaImagem>
                <AreaImagem>
                    <IconImage alt={'Icone'} src={iconetwitter} onClick={this.props.onClickCompartilhar}/>
                    <AreaP>Compartilhar em Twitter</AreaP>
                </AreaImagem>
            </AreaCompartilhar>
        )
    }
}