import styled from 'styled-components';


export const SCarrosselContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SCarrosselWrapper = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 35rem;
`;

export const SCarrosselImagem = styled.div`
    position: absolute;
    top: 0;
    height: 60%;
    width: 100%;
    border-radius: 1rem;
    background: url(${props => props.imagem}) no-repeat center center;
    background-size: cover;
    transition: all 0.5s ease-in-out;
`;

export const SCarrosselItem = styled.div`
    width: 5rem;
    position: relative;
    flex: 0 0 calc(33.33% - 2rem);
    margin: 0 1rem;

    @media (max-width: 768px) {
        flex: 0 0 calc(100% - 2rem);
    }

    &:hover ${SCarrosselImagem} {
        height: 100%;
        background-blend-mode: multiply;
        opacity: 0.3;
        z-index: -1;
    }

    &:not(:hover) ${SCarrosselImagem} {
        height: 60%;
        background-blend-mode: normal;
        opacity: 1;
        z-index: 0;
    }
`;

export const SCarrosselItemTexto = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
`;

export const SCarrosselTitulo = styled.label`
    width: calc(100% - 2rem);
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.05rem;
    margin: 0.2rem 1rem;
`;

export const SCarrosselDescricao = styled.label`
    width: calc(100% - 2rem);
    margin: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.2rem;
    letter-spacing: 0.05rem;
    font-family: "Montserrat Alternates", sans-serif;
`;

export const SCarrosselAssistir = styled.button`
    width: calc(100% - 2rem);
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    background: rgb(0, 109, 156);

    &:hover {
        background: rgb(0, 77, 110);
    }
`;

export const SControlsContainer = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
`;

export const SControlButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    color: #333;
    border: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
    pointer-events: auto;
    z-index: 1;

    &:hover {
        background-color: #333;
        color: #ffffff
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const SIndicatorsContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 8px;
`;

export const SIndicator = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
        background-color: #333;
    }
`;