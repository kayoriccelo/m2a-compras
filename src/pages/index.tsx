import React, { useState, useEffect } from 'react';

import '@fontsource/roboto';
import '@fontsource/montserrat-alternates';
import '@fontsource/poppins';

import Container from "@components/layout/container";
import Rodape from "@components/layout/rodape";
import Entidades from "@components/screens/principal/entidades";
import Inicio from "@components/screens/principal/inicio";
import Produtos from "@components/screens/principal/produtos";
import Estatisticas from "@components/screens/principal/estatisticas";
import Qualidades from "@components/screens/principal/qualidades";
import InteligenciaArtificial from "@components/screens/principal/inteligencia.artificial";
import Noticias from "@components/screens/principal/noticias";
import Conteudo from "@components/screens/principal/conteudo";
import Depoimentos from "@components/screens/principal/depoimentos";


import '../styles/global.css';


const PaginaPrincipal = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);
	
	const handleScroll = () => {
		const scrollY = window.scrollY;

		setScrollTop(scrollY);
	};

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

        window.addEventListener('resize', handleResize);

		handleResize()

		return () => {
			window.removeEventListener('scroll', handleScroll);

            window.removeEventListener('resize', handleResize);
		};
	}, []);

	const ehCabecalhoFlutuante = scrollTop === 0;

	return (
		<Container>
			<Inicio 
				ehCabecalhoFlutuante={ehCabecalhoFlutuante}
				larguraAtual={windowWidth} 
			/>

			<Entidades />

			<Produtos />	

			<Estatisticas />

			<Qualidades />

			<InteligenciaArtificial />

			<Depoimentos
				windowWidth={windowWidth} 
			/>

			<Noticias />

			<Conteudo />

			<Rodape />
		</Container>
	)
}

export const Head = () => <div title="Home" />

export default PaginaPrincipal
