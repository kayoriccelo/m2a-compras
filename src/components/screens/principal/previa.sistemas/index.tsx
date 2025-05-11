import React from "react";

import {
    SPreviaSistemas,
    SPreviaSistemasTitulo,
    SPreviaSistemasM2A,
    SPreviaSistemasDescricao
} from "./_styled";

import PalavraRotatoria from "@components/core/palavra.rotatoria";
import MuralSistemas from "@components/core/mural.sistemas";


export default function PreviaSistemas() {
    return (
        <SPreviaSistemas>
            <SPreviaSistemasTitulo>
                <SPreviaSistemasM2A>M2A</SPreviaSistemasM2A> é o mais <PalavraRotatoria palavras={['eficiente', 'completo', 'prático']} tempoRotacao={3000} /> portal de contratações públicas.
            </SPreviaSistemasTitulo>

            <SPreviaSistemasDescricao>
                Todas as ferramentas em um só lugar, para quem vai vender e quem vai comprar.
            </SPreviaSistemasDescricao>

            <MuralSistemas/>
        </SPreviaSistemas>
    );
};
