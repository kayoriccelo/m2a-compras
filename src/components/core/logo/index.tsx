import React from "react"

import { ILogo } from "./_interface"
import { SLogoContainer, SLogoGlobo, SLogoTexto } from "./_styled"

import M2ALogoGlobo from "@images/m2a-logo-globo.png";
import M2ALogoTexto from "@images/m2a-logo-texto.png";


export default function Logo({ isCabecalhoFlutuante }: ILogo) {
    return (
        <SLogoContainer isCabecalhoFlutuante={isCabecalhoFlutuante}>
            <SLogoGlobo
                isCabecalhoFlutuante={isCabecalhoFlutuante}
                src={M2ALogoGlobo}
            />

            <SLogoTexto
                isCabecalhoFlutuante={isCabecalhoFlutuante}
                src={M2ALogoTexto}
            />
        </SLogoContainer>
    )
}
