import styled from "styled-components";



export const SNoticiaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    height: 50rem;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 80rem;
        margin: 0;
    }
`;

export const SNoticiaPrincipal = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    min-width: 65%;

    @media (max-width: 768px) {
        min-width: 100%;
    }
`;

export const SNoticiaPrincialImagem = styled.img`
    background: green;
    height: calc(100% - 15rem);
    width: calc(100% - 15rem);
    margin: 7.5rem;
    border-radius: 1rem;

    @media (max-width: 768px) {
        height: calc(100% - 5rem);
        width: calc(100% - 5rem);
        margin: 2.5rem;
    }
`;

export const SNoticiaLista = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    min-width: 35%;
`;

export const SNoticiaListaTitulo = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    padding: 1rem;
    width: 100%;
    margin-top: 7.5rem;
`;

export const SNoticiaListaItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    width: 100%;
`;

export const SNoticiaListaItemNumero = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    padding: 1rem;
    min-width: 1rem;
`;

export const SNoticiaListaItemTexto = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 15rem;
    padding: 0 2rem;
`;

export const SNoticiaListaItemTitulo = styled.label`
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
`;

export const SNoticiaListaItemData = styled.label`
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
`;

export const SNoticiaListaItemImagem = styled.img`
    background: blue;
    height: 5rem;
    width: 5rem;
    border-radius: 1rem;
    margin: 0.5rem;
`;
