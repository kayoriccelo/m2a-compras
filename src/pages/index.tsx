import React, { useEffect } from 'react';

import '@fontsource/roboto';
import '@fontsource/montserrat-alternates';
import '@fontsource/poppins';

import Logo from "@components/core/logo";
import BotaoSelecionePlano from "@components/core/botoes/selecione.plano";
import Container from "@components/layout/container";
import Cabecalho from "@components/layout/cabecalho";
import Banner from "@components/layout/banner";
import MenuPrincipal from "@components/core/menus/principal";
import Rodape from "@components/layout/rodape";
import Entidades from "@components/screens/principal/entidades";
import PreviaSistemas from "@components/screens/principal/previa.sistemas";
import Inicio from "@components/screens/principal/inicio";
import Produtos from "@components/screens/principal/produtos";
import Estatisticas from "@components/screens/principal/estatisticas";
import Qualidades from "@components/screens/principal/qualidades";
import InteligenciaArtificial from "@components/screens/principal/inteligencia.artificial";
import Noticias from "@components/screens/principal/noticias";
import Conteudo from "@components/screens/principal/conteudo";
import Depoimentos from "@components/screens/principal/depoimentos";


import '../styles/global.css';


const IndexPage = () => {
	const [scrollTop, setScrollTop] = React.useState(0);
	
	const handleScroll = () => {
		const scrollY = window.scrollY;
	
		setScrollTop(scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const isCabecalhoFlutuante = scrollTop === 0;

	return (
		<Container>
			<Inicio>
				<Cabecalho isCabecalhoFlutuante={isCabecalhoFlutuante}>
					<Logo isCabecalhoFlutuante={isCabecalhoFlutuante} />

					<MenuPrincipal />

					<BotaoSelecionePlano isCabecalhoFlutuante={isCabecalhoFlutuante} />
				</Cabecalho>

				<Banner />

				<PreviaSistemas />
			</Inicio>

			<Entidades />

			<Produtos />

			<Estatisticas />

			<Qualidades />

			<InteligenciaArtificial />

			<Depoimentos />

			<Noticias />

			<Conteudo />

			<Rodape>
				Rodapé
			</Rodape>
		</Container>
	)
}

export const Head = () => <div title="Home" />

export default IndexPage
