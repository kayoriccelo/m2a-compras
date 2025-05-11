import React from "react"

import { 
    ICardEstatistica,
    ICardEstatisticaItem
} from "./_interface"
import {
    SCardEstatisticaContainer,
    SCardEstatisticaTitulo,
    SCardEstatisticaDescricao,
    SCardEstatisticaItemContainer,
    SCardEstatisticaItemIcone,
    SCardEstatisticaItemTitulo,
    SCardEstatisticaItemDescricao
} from "./_styled"


export default function CardEstatistica({ titulo, descricao }: ICardEstatistica) {
    return (
        <SCardEstatisticaContainer>
            <SCardEstatisticaTitulo>
                {titulo}
            </SCardEstatisticaTitulo>

            <SCardEstatisticaDescricao>
                {descricao}
            </SCardEstatisticaDescricao>
        </SCardEstatisticaContainer>
    )
}

export function CardEstatisticaItem({ icone, titulo, descricao }: ICardEstatisticaItem) {
    return (
        <SCardEstatisticaItemContainer>
            <SCardEstatisticaItemIcone>
                {icone}
            </SCardEstatisticaItemIcone>

            <SCardEstatisticaItemTitulo>
                {titulo}
            </SCardEstatisticaItemTitulo>

            <SCardEstatisticaItemDescricao>
                {descricao}
            </SCardEstatisticaItemDescricao>
        </SCardEstatisticaItemContainer>
    )
}
