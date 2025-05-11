import styled from "styled-components";


export const SBanner = styled.div`
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;   
    height: 50rem;
    display: flex;
    justify-content: left;
    padding: 0 10rem;
    text-align: center;
    color: white;

    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
        url(https://compras.m2atecnologia.com.br/static/img/slides/pngegg.png);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 0;
    }
`;

export const SBannerFadeIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    border-radius: 2rem;
    padding: 2rem;
    margin: 2rem;
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    @keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        align-items: center;
        padding: 0;
        margin: 0;
    }
`;

export const SBannerTitulo = styled.label`
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const SBannerSubtitulo = styled.label`
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.5rem;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
        text-wrap-mode: wrap;
        margin: 0 1rem 1rem 1rem;
    }
`;