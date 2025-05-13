import styled from "styled-components";


export const SCardEstatisticaContainer = styled.div`
    flex: 1 1 calc(25% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10rem;    
    border-radius: 0.8rem;
    min-width: 15rem;

    @media (max-width: 768px) {
        height: 7rem;
        font-size: 1.5rem;
    }
`

export const SCardEstatisticaTitulo = styled.label`
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const SCardEstatisticaDescricao = styled.label`
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Montserrat Alternates', sans-serif;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const SCardEstatisticaItemContainer = styled.div`
    height: 10rem;
    width: 20rem;
    margin: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 7rem;
    }
`

export const SCardEstatisticaItemIcone = styled.div`
    color:rgb(245, 212, 115);
    font-size: 5rem;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`

export const SCardEstatisticaItemTitulo = styled.label`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;

    animation: heartbeat 8s ease-in-out infinite both;

    @keyframes heartbeat {
        from {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: center center;
                    transform-origin: center center;
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        3% {
            -webkit-transform: scale(0.91);
                    transform: scale(0.91);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        6% {
            -webkit-transform: scale(0.98);
                    transform: scale(0.98);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        9% {
            -webkit-transform: scale(0.87);
                    transform: scale(0.87);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        12% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        50% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        75% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }
`

export const SCardEstatisticaItemDescricao = styled.label`
    color: #ffffff;
    font-size: 1.1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    width: 15rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`
