import React from 'react'

import Carrossel from "@components/core/carrossel";

import imgProductCompras from "@images/produto_compras.png";
import imgProductPesquisas from "@images/produto_pesquisa.png";
import imgProductProcessos from "@images/produto_processos.png";

import {
    SDepoimentosBloco,
    SDepoimentosTitulo,
} from "./_styled";


export default function Depoimentos() {
    return (
        <SDepoimentosBloco>
            <SDepoimentosTitulo>
                Depoimentos
            </SDepoimentosTitulo>

            <Carrossel images={[
                imgProductCompras,
                imgProductPesquisas,
                imgProductProcessos,
                imgProductCompras,
                imgProductPesquisas,
                imgProductProcessos,
                imgProductCompras,
                imgProductPesquisas,
                imgProductProcessos,
            ]} />
        </SDepoimentosBloco>
    );
};
