import React from "react"

import {
    ICardInteligenciaArticifial,
} from "./_interface"

import {
    SCardInteligenciaArticifialContainer,
    SCardInteligenciaArticifialContent,
    SCardInteligenciaArticifialImagem,
    SCardInteligenciaArticifialTexto,
    SCardInteligenciaArticifialTitulo,
    SCardInteligenciaArticifialDescricao,
} from "./_styled"


export default function CardInteligenciaArticifial({ imagem, titulo, descricao, style }: ICardInteligenciaArticifial) {
    return (
        <SCardInteligenciaArticifialContainer style={style}>
            <SCardInteligenciaArticifialContent>
                <SCardInteligenciaArticifialImagem src={imagem} />

                <SCardInteligenciaArticifialTexto>
                    <SCardInteligenciaArticifialTitulo>
                        {titulo}
                    </SCardInteligenciaArticifialTitulo>

                    <SCardInteligenciaArticifialDescricao>
                        {descricao}
                    </SCardInteligenciaArticifialDescricao>
                </SCardInteligenciaArticifialTexto>
            </SCardInteligenciaArticifialContent>
        </SCardInteligenciaArticifialContainer>
    )
}