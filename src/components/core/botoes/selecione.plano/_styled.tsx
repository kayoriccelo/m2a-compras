import styled from "styled-components";


export const SBotaoSelecionePlano = styled.button`
    transition: filter 0.3s ease-in-out; /* Adicionando transição para o filtro */
    height: 3rem;
    width: 15rem;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: "Poppins", sans-serif;
    background-color: #ffc107;
    color: #fff;
    border: none;
    border-radius: 20px 0 20px 0;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: #e0a800; /* Tom mais escuro de laranja */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma pequena sombra */
        transform: translateY(-1px); /* Levemente para cima */
    }

    &:active {
        background-color: #d19600; /* Tom ainda mais escuro ao clicar */
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* Remove a sombra ao clicar */
        transform: translateY(0); /* Retorna à posição original ao clicar */
    }

    @media (max-width: 1024px) {
        display: none;
    }
`