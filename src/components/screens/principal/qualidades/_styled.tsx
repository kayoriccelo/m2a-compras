import styled from "styled-components";


export const SQualidadesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background-color: #ffffff;
    overflow: hidden;
    margin: 10rem 10rem 0 10rem;
`;

export const SQualidadesContent = styled.div`
    display: flex;
    flex: 1;
    opacity: 0;
    filter: blur(40px); /* Blur inicial */
    transform: translateX(1000px) scaleX(1) scaleY(1); /* Posição inicial da animação (direita) */
    transform-origin: 0% 50%;
    transition: all 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000); /* Para transições não animadas */

    &.visible-right {
        animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    &.visible-left {
        animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    }

    &.invisible-left {
        animation: slide-out-blurred-left 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
    }

    &.invisible-right {
        animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
    }
        
    @keyframes slide-in-blurred-right {
        0% {
            -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
                    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 0% 50%;
                    transform-origin: 0% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-out-blurred-right {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
                    transform: translateX(1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 0% 50%;
                    transform-origin: 0% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
    }

    @keyframes slide-in-blurred-left {
        0% {
            -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
                    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
                    transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes slide-out-blurred-left {
        0% {
            -webkit-transform: translateX(0) scaleY(1) scaleX(1);
                    transform: translateX(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(-1000px) scaleX(2) scaleY(0.2);
                    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
            -webkit-transform-origin: 100% 50%;
                    transform-origin: 100% 50%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
    }

`;

export const SQualidadesImagem = styled.div`
    padding: 0 5rem 5rem 5rem;
    color: #003366;
`;

export const SQualidadesTexto = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 2;
`;

export const SQualidadesTitulo = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
`;

export const SQualidadesDescricao = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 0.90rem;
    max-width: 40rem
`;
