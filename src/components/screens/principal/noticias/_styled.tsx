import styled from "styled-components";



export const SNoticiaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    min-height: 65rem;
    border-radius: 2rem;
    background: linear-gradient(to bottom, #FFFFFF,rgba(0, 51, 102, 0.25), #FFFFFF),
            repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                rgba(240, 240, 240, 0.2) 5px,
                rgba(240, 240, 240, 0.2) 10px
            );
    background-blend-mode: overlay;
    animation: corCiclica 5s infinite alternate;

    @keyframes corCiclica {
        0% {
            background-position: 0% 0%; /* Começa com o branco visível */
        }
        100% {
            background-position: 100% 0%; /* Move o azul para o centro e o branco para o final */
        }
    }

    @media (max-width: 768px) {
        flex-direction: row;
        height: 80rem;
        width: 100%;
        margin: 0;
    }
`;

export const SNoticiaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const SNoticiaPrincipal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem;
    min-width: 50rem;

    @media (max-width: 768px) {
        min-width: 100%;
        margin: 0;
    }
`;

export const SNoticiaPrincialImagem = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
    height: 38rem;
    width: 55rem;
    border-radius: 1rem;

    @media (max-width: 768px) {
        height: calc(100% - 2rem);
        width: calc(100% - 2rem);
    }
`;

export const SNoticiaLista = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem;
    min-width: 40rem;

    @media (max-width: 768px) {
        min-width: calc(100% - 0.4rem);
        margin: 2rem 0.2rem;
    }    
`;

export const SNoticiaListaTitulo = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    height: 10rem;
    width: 100%;
`;
