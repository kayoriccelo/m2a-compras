import styled from "styled-components";


export const SCardNoticiaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: calc(100% - 4rem);
    background: #003366;
    margin: 0.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const SCardNoticiaNumero = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    background: #ffc107;
    color: #ffffff;
    min-height: 3rem;
    min-width: 3rem;
    border-radius: 0.5rem;
    margin-left: -1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const SCardNoticiaContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem;
    width: 100%;
`;

export const SCardNoticiaTitulo = styled.label`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
`;

export const SCardNoticiaData = styled.label`
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    color: #ffffff;
`;

export const SCardNoticiaImagem = styled.img`
    height: 5rem;
    width: 6rem;
    border-radius: 0.9rem;
    background: blue;
    margin: 1.5rem;
`;
