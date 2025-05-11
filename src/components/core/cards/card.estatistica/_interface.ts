import { ReactNode } from "react";


export interface ICardEstatistica {
    titulo: string,
    descricao: string,
}

export interface ICardEstatisticaItem {
    icone: ReactNode,
    titulo: string,
    descricao: string
}
