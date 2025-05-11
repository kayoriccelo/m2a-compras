import React, { useState, useEffect } from "react";

import { IPalavraRotatoria } from "./_interface";
import { WordRotatorContainer, RotatingWord } from "./_styled";


export default function PalavraRotatoria({ palavras = [], tempoRotacao = 3000 }: IPalavraRotatoria) {
    const [indicePalavra, setIndicePalavra] = useState(0);
    const [palavraAtual, setPalavraAtual] = useState(palavras[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndicePalavra((prevIndice) => (prevIndice + 1) % palavras.length);
        }, tempoRotacao);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setPalavraAtual(palavras[indicePalavra]);
    }, [indicePalavra]);

    return (
        <WordRotatorContainer>
            <RotatingWord key={palavraAtual}>
                {palavraAtual}
            </RotatingWord>
        </WordRotatorContainer>
    );
}