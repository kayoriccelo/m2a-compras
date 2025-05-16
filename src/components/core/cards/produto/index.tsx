import React, { 
    useEffect, 
    useRef, 
    useState 
} from "react";

import { ICardProduto } from "./_interface";
import {
    SCardProdutoContainer,
    SCardProdutoImagem,
    SCardProdutoTitulo,
    SCardProdutoDescricao
} from "./_styled";


export default function CardProduto({ titulo, descricao, url_imagem, style }: ICardProduto) {
    const [visivel, alimentarVisivel] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                alimentarVisivel(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (visivel) {
            console.log("Componente visível!");
        }
    }, [visivel]);

    return (
        <SCardProdutoContainer
            style={style}
        >
            <SCardProdutoImagem
                url_imagem={url_imagem}
                ref={containerRef}
                visivel={visivel}
            />

            <SCardProdutoTitulo>
                {titulo}
            </SCardProdutoTitulo>

            <SCardProdutoDescricao>
                {descricao}
            </SCardProdutoDescricao>
        </SCardProdutoContainer>
    )
}
