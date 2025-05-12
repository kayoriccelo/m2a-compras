import styled from "styled-components";


export const SCardInteligenciaArticifialContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
    min-height: 30rem;
    max-width: 20rem;
    margin: 1rem;
    border-radius: 2rem;

    width: 100%;
    overflow: visible;
`

export const SCardInteligenciaArticifialContent = styled.div`
    padding: 1rem;
    opacity: 1;
    background: transparent;
    box-shadow: none;
    max-height: 35rem;
`

export const SCardInteligenciaArticifialImagem = styled.img`
    margin-top: -45px;
    height: 20rem;
    width: 100%;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.50rem 0.50rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.50rem -0.0625rem;
    filter: brightness(95%);
`

export const SCardInteligenciaArticifialTexto = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 8px 8px;
    opacity: 1;
    background: transparent;
    box-shadow: none;
}
`

export const SCardInteligenciaArticifialTitulo = styled.label`
    font-weight: bold;
    font-size: 1rem;
    color: #003366;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const SCardInteligenciaArticifialDescricao = styled.label`
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`
