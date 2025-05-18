import React from "react";

import { ICardNoticia } from "./_interface";
import {
    SCardNoticiaContainer,
    SCardNoticiaNumero,
    SCardNoticiaContent,
    SCardNoticiaTitulo,
    SCardNoticiaData,
    SCardNoticiaImagem
} from "./_styled";


export default function CardNoticia({ numero, titulo, data, imagem, style }: ICardNoticia) {
    return (
        <SCardNoticiaContainer style={style}>
            <SCardNoticiaContent>
                <SCardNoticiaTitulo>
                    {titulo}
                </SCardNoticiaTitulo>

                <SCardNoticiaData>
                    {data}
                </SCardNoticiaData>
            </SCardNoticiaContent>

            <SCardNoticiaImagem
                src={imagem}
            />
        </SCardNoticiaContainer>
    );
};
