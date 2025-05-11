import React from "react"

import BotaoSoliciteUmaApresentacao from "@components/core/botoes/solicite.apresentacao"

import { 
    SBanner, 
    SBannerFadeIn, 
    SBannerTitulo,
    SBannerSubtitulo
} from "./_styled"


export default function Banner() {
    return (
        <SBanner>
            <SBannerFadeIn>
                <SBannerTitulo>
                    A M2A tem as soluções
                </SBannerTitulo>

                <SBannerSubtitulo>
                    que você precisa para realizar suas contratações governamentais!
                </SBannerSubtitulo>

                <BotaoSoliciteUmaApresentacao />
            </SBannerFadeIn>
        </SBanner>
    )
}
