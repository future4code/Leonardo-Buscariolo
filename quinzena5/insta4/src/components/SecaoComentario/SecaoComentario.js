import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 97%;
	margin-bottom: 5px;
`

const ImagemUsuario = styled.img`
    width: 90px;
	height: 90px;
	background-color: red;
`

export class SecaoComentario extends Component {
	state = {
		comentario: [ 
			{
			valorComentario: ''
			},
		],
	valorComentario: ''
	}

	adicionaComentario = () => {
		const novoComentario = {
			valorComentario: this.state.valorComentario
		}

		const novoComentarioAdicionado = [...this.state.comentario, novoComentario]

		this.setState({comentario: novoComentarioAdicionado})
		this.setState({valorComentario: ''})
	}

	onChangeComentario = (event) => {
		this.setState({
			valorComentario: event.target.value
		})
		console.log(event.target.value)
	}

	render() {

		const novoComentarioRenderizado = this.state.comentario.map((comentario) => {
			return (
				<p>
					{comentario.valorComentario}
				</p>
			)
		})

		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar} onClick={this.adicionaComentario}>Enviar</button>
			{novoComentarioRenderizado}
		</CommentContainer>
	}
}
