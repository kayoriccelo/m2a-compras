import React from "react"

import { SBotaoSelecionePlano } from "./_styled"


export default function BotaoSelecionePlano({ isCabecalhoFlutuante }) {
    return (
        <SBotaoSelecionePlano isCabecalhoFlutuante={isCabecalhoFlutuante}>
            Selecione um plano
        </SBotaoSelecionePlano>
    )
}
