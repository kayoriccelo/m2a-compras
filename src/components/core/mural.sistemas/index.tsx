import React from 'react';
import { withPrefix } from "gatsby";
import styled from 'styled-components';

import imgMuralM2ACompras from '@images/mural-m2a-compras.jpg';
import imgMuralM2APlanejamento from '@images/mural-m2a-planejamento.jpg';
import imgMuralM2APesquisas from '@images/mural-m2a-pesquisas.jpg';
import imgMuralM2AFornecedores from '@images/mural-m2a-fornecedores.jpg';


const MuralContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  overflow-x: auto; /* Para lidar com muitas imagens */
`;

const MuralImagemWrapper = styled.div`
  	flex: 0 0 auto;
  	width: auto;
  	max-width: 400px; /* Ajuste conforme a largura desejada das capturas de tela */
  	height: auto;
	border-radius: 8px;
  	overflow: hidden;
  	margin-right: -30px; /* Margem negativa para sobreposição (ajuste conforme necessário) */
`;

const MuralImagem1 = styled.img`
  	position: absolute;
  	z-index: 1;
  	left: 0;
  	bottom: 50%;
  	width: 44rem;
  	height: 22rem;
  	opacity: 1;
  	transform: translateY(20px);
  	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    box-shadow: -10px 7px 10px -14px rgb(0 0 0);
    border-radius: 12px;

`;

const MuralImagem2 = styled.img`
  	position: absolute;
  	z-index: 2;
  	left: 25rem;
  	bottom: 52%;
  	width: 50rem;
  	height: 25rem;
  	opacity: 1;
  	transform: translateY(20px);
   	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	box-shadow: -10px 7px 10px -14px rgb(0 0 0);
	border-radius: 12px;

`;

const MuralImagem3 = styled.img`
	position: absolute;
	z-index: 3;
	left: 60rem;
	bottom: 50%;
	width: 65rem;
	height: 32.5rem;
	opacity: 1;
	transform: translateY(20px);
	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	box-shadow: -10px 7px 10px -14px rgb(0 0 0);
	border-radius: 12px;
`;

const MuralImagem4 = styled.img`
	position: absolute;
	z-index: 4;
	left: 90rem;
	bottom: 50%;
	width: 44rem;
  	height: 22rem;
	opacity: 1;
	transform: translateY(20px);
	transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  	box-shadow: -10px 7px 10px -14px rgb(0 0 0);
	border-radius: 12px;
`;

const MuralDeImagens = () => {
	return (
		<MuralContainer>
			<MuralImagemWrapper>
				<MuralImagem1
					src={withPrefix(imgMuralM2ACompras)}
					alt={'M2A Compras'}
				/>
			</MuralImagemWrapper>

			<MuralImagemWrapper>
				<MuralImagem2
					src={withPrefix(imgMuralM2APlanejamento)}
					alt={'M2A Planejamento'}
				/>
			</MuralImagemWrapper>

			<MuralImagemWrapper>
				<MuralImagem3
					src={withPrefix(imgMuralM2AFornecedores)}
					alt={'M2A Fornecedores'}
				/>
			</MuralImagemWrapper>

			<MuralImagemWrapper>
				<MuralImagem4
					src={withPrefix(imgMuralM2APesquisas)}
					alt={'M2A Pesquisas'}
				/>
			</MuralImagemWrapper>
		</MuralContainer>
	);
};

export default MuralDeImagens;