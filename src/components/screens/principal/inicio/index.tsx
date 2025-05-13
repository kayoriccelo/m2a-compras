import React from 'react';

import Logo from "@components/core/logo";
import BotaoSelecionePlano from "@components/core/botoes/selecione.plano";
import Cabecalho from "@components/layout/cabecalho";
import Banner from "@components/layout/banner";
import MenuPrincipal from "@components/core/menus/principal";
import PreviaSistemas from "@components/screens/principal/previa.sistemas";

import { IInicio } from "./_interface"
import { SInicio } from "./_styled"


export default function Inicio({ isCabecalhoFlutuante }: IInicio) {
    return (
        <SInicio>
            <Cabecalho>
                <Logo isCabecalhoFlutuante={isCabecalhoFlutuante} />

                <MenuPrincipal />

                <BotaoSelecionePlano isCabecalhoFlutuante={isCabecalhoFlutuante} />
            </Cabecalho>

            <Banner />

            <PreviaSistemas />
        </SInicio>
    )
}
