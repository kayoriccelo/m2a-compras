import { ReactNode, CSSProperties } from "react";

export interface IQuantidadeItem {
    icone: ReactNode;
    titulo: string;
    descricao: string;
    entrada: string;
    saida: string;
    style: CSSProperties;
};
