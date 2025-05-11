import styled from "styled-components";

import { ISCardProdutoContainer } from "./_interface";


export const SCardProdutoContainer = styled.div<ISCardProdutoContainer>`
    flex: 1 1 calc(33.33% - 20px);
    position: relative;    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 15rem;   
    margin: 0.5rem; 
    border-radius: 0.8rem;
    background: url(${props => props.url_imagem}) no-repeat center center;
    background-size: cover; 

    &::before {
        content: '';
        position: absolute;
        border-radius: 1rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.34);
        z-index: 0;
    }
    
    @media (max-width: 1200px) {
        flex: 1 1 calc(50% - 20px); /* 2 itens por linha em telas menores */
        max-width: calc(50% - 20px);
    }

    @media (max-width: 900px) {
        flex: 1 1 100%; /* 1 item por linha em telas pequenas */
        max-width: 100%;
    }
`;

export const SCardProdutoTitulo = styled.label`
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 1rem;
    height: 2.8rem;
    width: 15rem;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0.2rem 1rem;
    border-radius: 0.5rem;
    color: #ffffff;
    background-color: #ffc107;
    font-family: 'Poppins', sans-serif;
    clip-path: polygon(0% 0%, 100% 0%, 94% 50%, 100% 100%, 0% 100%, 0% 0%, 100% 100%);

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 12rem;
    }
`;

export const SCardProdutoDescricao = styled.label`
    z-index: 1;
    margin: 0 1rem 1rem 1rem;
    color: #ffffff;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Montserrat Alternates', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;
