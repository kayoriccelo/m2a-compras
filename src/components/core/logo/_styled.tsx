import styled from "styled-components";




export const SLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2rem;
    height: 5rem;    
    width: 15rem;

    @media (max-width: 1024px) {
        margin: 2rem;
        justify-content: flex-start;
        flex-direction: row;
    }
`;

export const SLogoGlobo = styled.img`
    transition: all 0.95s ease-in-out;

    ${props => props.ehCabecalhoFlutuante ? 
        `` : 
        `filter: sepia(100%) hue-rotate(200deg) brightness(70%);`
    }
    animation: rotate-center 20s ease-in infinite both;

    @keyframes rotate-center {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 768px) {
        height: 2.5rem;
    }
`;

export const SLogoTexto = styled.img`
    transition: all 0.95s ease-in-out;

    ${props => props.ehCabecalhoFlutuante ? 
        `` : 
        `
        filter: sepia(100%) hue-rotate(200deg) brightness(50%);

        `
    }
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        height: 1.5rem; 
    }
`;
