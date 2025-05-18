import React from 'react';

import CardNoticia from '@components/core/cards/noticia';
import BotaoMaisNoticias from "@components/core/botoes/mais.noticias";

import imgProdutoProcessos from "@images/produto_processos.png";
import imgProdutoCompras from "@images/produto_compras.png";

import {
    SNoticiaContainer,
    SNoticiaTitulo,
    SNoticiaContent,
    SNoticiaPrincipal,
    SNoticiaPrincipalDestaque,
    SNoticiaPrincipalFundo,
    SNoticiaPrincipalTitulo,
    SNoticiaPrincipalDescricao,
    SNoticiaSecundaria,
    SNoticiaCard,
    SNoticiaCardTitulo,
    SNoticiaCardDescricao,
    SNoticiaLateral,
    SNoticiaLateralColuna,
    SNoticiaLateralCard,
    SNoticiaLateralTitulo,
    SNoticiaLateralDescricao,
} from "./_styled";


export default function Noticias() {

    return (
        <SNoticiaContainer>
            <SNoticiaTitulo>
                Notícias
            </SNoticiaTitulo>

            <SNoticiaContent>
                <SNoticiaPrincipal>
                    <SNoticiaPrincipalDestaque>
                        <SNoticiaPrincipalFundo
                            imgProdutoProcessos={imgProdutoProcessos}
                        >
                            <SNoticiaPrincipalTitulo>
                                Governo Federal Anuncia Nova Lei de Licitações Digitais
                            </SNoticiaPrincipalTitulo>

                            <SNoticiaPrincipalDescricao>
                                Nova legislação promete revolucionar processos de compras públicas com foco em tecnologia e transparência
                            </SNoticiaPrincipalDescricao>
                        </SNoticiaPrincipalFundo>
                    </SNoticiaPrincipalDestaque>

                    <SNoticiaSecundaria>
                        {[
                            {
                                titulo: "Ministério da Economia Investe em Software de Gestão",
                                descricao: "Projeto piloto será implementado em 5 secretarias estaduais",
                                imagem: imgProdutoCompras
                            },
                            {
                                titulo: "Lei de Proteção de Dados Públicos é Aprovada",
                                descricao: "Nova regulamentação estabelece padrões para armazenamento de dados governamentais",
                                imagem: imgProdutoProcessos
                            },
                            {
                                titulo: "Prefeituras Adotam Sistema de Compras Online",
                                descricao: "Municípios economizam mais de R$ 50 milhões com nova plataforma",
                                imagem: imgProdutoCompras
                            }
                        ].map((noticia, index) => (
                            <SNoticiaCard
                                key={index}
                                imagem={noticia.imagem}
                            >
                                <SNoticiaCardTitulo>
                                    {noticia.titulo}
                                </SNoticiaCardTitulo>

                                <SNoticiaCardDescricao>
                                    {noticia.descricao}
                                </SNoticiaCardDescricao>
                            </SNoticiaCard>
                        ))}
                    </SNoticiaSecundaria>
                </SNoticiaPrincipal>

                <SNoticiaLateral>
                    <SNoticiaLateralColuna>
                        {[
                            {
                                titulo: "TCU Recomenda Uso de IA em Licitações",
                                descricao: "Tribunal sugere implementação de inteligência artificial para análise de propostas",
                                imagem: imgProdutoProcessos
                            },
                            {
                                titulo: "Nova Plataforma de Compras Governamentais",
                                descricao: "Sistema unificado promete reduzir custos operacionais em 30%",
                                imagem: imgProdutoCompras
                            }
                        ].map((noticia, index) => (
                            <SNoticiaLateralCard
                                key={index}
                                imagem={noticia.imagem}
                            >
                                <SNoticiaLateralTitulo>
                                    {noticia.titulo}
                                </SNoticiaLateralTitulo>

                                <SNoticiaLateralDescricao>
                                    {noticia.descricao}
                                </SNoticiaLateralDescricao>
                            </SNoticiaLateralCard>
                        ))}
                    </SNoticiaLateralColuna>

                    <SNoticiaLateralColuna>
                        {[
                            {
                                titulo: "Governo Lança Portal de Transparência 2.0",
                                descricao: "Nova versão do sistema traz recursos avançados de visualização de dados",
                                imagem: imgProdutoProcessos
                            },
                            {
                                titulo: "Lei de Software Livre é Atualizada",
                                descricao: "Nova versão da legislação incentiva uso de código aberto no setor público",
                                imagem: imgProdutoCompras
                            }
                        ].map((noticia, index) => (
                            <SNoticiaLateralCard
                                key={index}
                                imagem={noticia.imagem}
                            >
                                <SNoticiaLateralTitulo>
                                    {noticia.titulo}
                                </SNoticiaLateralTitulo>

                                <SNoticiaLateralDescricao>
                                    {noticia.descricao}
                                </SNoticiaLateralDescricao>
                            </SNoticiaLateralCard>
                        ))}
                    </SNoticiaLateralColuna>
                </SNoticiaLateral>
            </SNoticiaContent>
        </SNoticiaContainer>
    );
};
