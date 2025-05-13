import React from "react"

import { ICardProduto } from "./_interface"
import {
    SCardProdutoContainer,
    SCardProdutoImagem,
    SCardProdutoTitulo,
    SCardProdutoDescricao
} from "./_styled"


export default function CardProduto({ titulo, descricao, url_imagem, style }: ICardProduto) {
    return (
        <SCardProdutoContainer style={style}>
            <SCardProdutoImagem
                url_imagem={url_imagem}
            >
            </SCardProdutoImagem>
            
            <SCardProdutoTitulo>
                {titulo}
            </SCardProdutoTitulo>

            <SCardProdutoDescricao>
                {descricao}
            </SCardProdutoDescricao>
        </SCardProdutoContainer>
    )
}
