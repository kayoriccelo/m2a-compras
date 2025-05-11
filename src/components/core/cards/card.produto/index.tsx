import React from "react"

import { ICardProduto } from "./_interface"
import {
    SCardProdutoContainer,
    SCardProdutoTitulo,
    SCardProdutoDescricao
} from "./_styled"


export default function CardProduto({ titulo, descricao, url_imagem }: ICardProduto) {
    return (
        <SCardProdutoContainer
            url_imagem={url_imagem}
        >
            <SCardProdutoTitulo>
                {titulo}
            </SCardProdutoTitulo>

            <SCardProdutoDescricao>
                {descricao}
            </SCardProdutoDescricao>
        </SCardProdutoContainer>
    )
}
