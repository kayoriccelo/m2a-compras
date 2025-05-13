import { CSSProperties } from "react";


export interface ICardNoticia {
    numero: string,
    titulo: string,
    data: string,
    imagem: string,
    style?: CSSProperties;
}
