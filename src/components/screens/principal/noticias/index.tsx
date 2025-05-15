import React from 'react';

import CardNoticia from '@components/core/cards/noticia';

import BotaoMaisNoticias from "@components/core/botoes/mais.noticias";
import imgProdutoProcessos from "@images/produto_processos.png";
import imgProdutoCompras from "@images/produto_compras.png";

import {
    SNoticiaContainer,
    SNoticiaContent,
    SNoticiaPrincipal,
    SNoticiaLista,
    SNoticiaListaTitulo,
    SNoticiaPrincialImagem
} from "./_styled";


export default function Noticias() {

    return (
        <SNoticiaContainer>
            <SNoticiaListaTitulo>
                Notícias
            </SNoticiaListaTitulo>

            <SNoticiaContent>
                <SNoticiaPrincipal>
                    <SNoticiaPrincialImagem
                        src={imgProdutoProcessos}
                    />
                </SNoticiaPrincipal>
            
                <SNoticiaLista>
                    <CardNoticia
                        numero="4°"
                        titulo="Quarta Notícia"
                        data="12 de maio"
                        imagem={imgProdutoCompras}
                    />

                    <CardNoticia
                        numero="5°"
                        titulo="Quinta Notícia"
                        data="11 de maio"
                        imagem={imgProdutoCompras}
                    />

                    <CardNoticia
                        numero="6°"
                        titulo="Sexta Notícia"
                        data="10 de maio"
                        imagem={imgProdutoCompras}
                    />

                    <CardNoticia
                        numero="7°"
                        titulo="Sétima Notícia"
                        data="10 de maio"
                        imagem={imgProdutoCompras}
                    />
                </SNoticiaLista>
                </SNoticiaContent>
            <BotaoMaisNoticias />
        </SNoticiaContainer>
    );
};
