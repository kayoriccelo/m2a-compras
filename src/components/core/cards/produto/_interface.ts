import { CSSProperties } from "react";


export interface ICardProduto {
    titulo: string,
    descricao: string,
    url_imagem: string,
    style: CSSProperties
}

export interface ISCardProdutoImagem {
    url_imagem: string,
    visivel: boolean
}
