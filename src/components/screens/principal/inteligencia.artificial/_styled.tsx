import styled from "styled-components";


export const SInteligenciaArticifialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    padding: 5rem 0;
    background: linear-gradient(to bottom, #FFFFFF,rgba(0, 51, 102, 0.25), #FFFFFF),
            repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                rgba(240, 240, 240, 0.2) 5px,
                rgba(240, 240, 240, 0.2) 10px
            );
    background-blend-mode: overlay;
`;

export const SInteligenciaArticifialContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 65rem;
`;

export const SInteligenciaArticifialTitulo = styled.label`
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    margin: 4rem;
`;
