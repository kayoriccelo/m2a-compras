import React from "react";
import { withPrefix } from "gatsby";

import { ILogo } from "./_interface";
import {
    SLogoContainer,
    SLogoGlobo,
    SLogoTexto
} from "./_styled";

import M2ALogoGlobo from "@images/m2a-logo-globo.png";
import M2ALogoTexto from "@images/m2a-logo-texto.png";


export default function Logo({ ehCabecalhoFlutuante }: ILogo) {
    return (
        <SLogoContainer ehCabecalhoFlutuante={ehCabecalhoFlutuante}>
            <SLogoGlobo
                ehCabecalhoFlutuante={ehCabecalhoFlutuante}
                src={withPrefix(M2ALogoGlobo)}
            />

            <SLogoTexto
                ehCabecalhoFlutuante={ehCabecalhoFlutuante}
                src={withPrefix(M2ALogoTexto)}
            />
        </SLogoContainer>
    );
};
