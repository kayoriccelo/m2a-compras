import styled from "styled-components";

import { ISCardProdutoImagem } from "./_interface";


export const SCardProdutoContainer = styled.div`
    flex: 1 1 calc(33.33% - 6rem);
    position: relative; 
    border-radius: 1rem;
    margin: 2rem 1rem;
    min-height: 15rem;   
    min-width: 15rem;
`;

export const SCardProdutoImagem = styled.div<ISCardProdutoImagem>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: 15rem;
    margin: -0.8rem 0.8rem 0.8rem -0.8rem;
    border-radius: 0.8rem;
    background: url(${props => props.url_imagem}) no-repeat center center;
    background-size: cover;
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.34);
    filter: brightness(65%);
    min-width: 15rem;
    
    @media (max-width: 1200px) {
        flex: 1 1 calc(50% - 20px); /* 2 itens por linha em telas menores */
    }

    @media (max-width: 900px) {
        flex: 1 1 100%; /* 1 item por linha em telas pequenas */
    }
`;

export const SCardProdutoTitulo = styled.label`
    position: absolute;
    bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 1rem;
    height: 2.8rem;
    width: 15rem;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem;
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
    position: absolute;
    bottom: 1rem;
    margin: 0 1rem 1rem 1rem;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;
