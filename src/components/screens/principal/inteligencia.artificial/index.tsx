import React from 'react';

import CardInteligenciaArticifial from "@components/core/cards/inteligencia.artificial";

import imgIA from "@images/ia-software.png";
import imgIA2 from "@images/ia-2-software.png";
import imgIA3 from "@images/ia-3-software.png";
import imgProductPesquisas from "@images/produto_pesquisa.png";
import imgProductProcessos from "@images/produto_processos.png";

import {
    SInteligenciaArticifialContainer,
    SInteligenciaArticifialContent,
    SInteligenciaArticifialTitulo
} from "./_styled";


export default function InteligenciaArticifial() {
    return (
        <SInteligenciaArticifialContainer>

            <SInteligenciaArticifialTitulo>
                MIA: A Inteligência Artificial que Entende o seu Governo
            </SInteligenciaArticifialTitulo>

            <SInteligenciaArticifialContent>
                <CardInteligenciaArticifial
                    style={{ alignSelf: 'flex-end' }}
                    imagem={imgIA}
                    titulo="Estudos Técnicos Aprofundados"
                    descricao="
                        Otimize seus estudos técnicos preliminares com a MIA, nossa Inteligência Artificial. Ela 
                        auxilia na geração de análises bem elaboradas, garantindo um entendimento completo da demanda 
                        e a melhor abordagem para atendê-la. Conte com a precisão e eficiência da MIA para impulsionar 
                        seus projetos.
                    "
                />

                <CardInteligenciaArticifial
                    style={{ alignSelf: 'flex-start' }}
                    imagem={imgIA3}
                    titulo="Formalização de Demandas Inteligente e Eficaz"
                    descricao="
                        Simplifique a formalização de suas demandas com a MIA. Nossa Inteligência Artificial auxilia na 
                        criação de objetos e justificativas claras e concisas, detalhando o que é a demanda e o motivo 
                        de sua necessidade. Garanta documentos bem elaborados e um processo mais eficiente com a MIA.
                    "
                />

                <CardInteligenciaArticifial
                    style={{ alignSelf: 'flex-end' }}
                    imagem={imgIA2}
                    titulo="Avaliação de Riscos Inteligente e Seguras"
                    descricao="
                        Minimize riscos em suas contratações com a MIA, nossa Inteligência Artificial especializada em 
                        avaliação de perigos. Ela analisa dados complexos e identifica potenciais vulnerabilidades, 
                        fornecendo insights cruciais para decisões mais seguras e eficientes. Confie na MIA para 
                        proteger seus projetos.
                    "
                />
            </SInteligenciaArticifialContent>
        </SInteligenciaArticifialContainer>
    );
};
