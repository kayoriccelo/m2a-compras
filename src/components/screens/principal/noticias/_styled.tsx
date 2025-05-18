import styled from "styled-components";


export const SNoticiaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
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

    @media (max-width: 1024px) {
        flex-direction: row;
        height: 160rem;
        width: 100%;
        margin: 0;
    }
`;

export const SNoticiaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    width: calc(100% - 4rem);
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
    }
`;

export const SNoticiaTitulo = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    height: 10rem;
    width: 100%;
`;

export const SNoticiaPrincipal = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const SNoticiaPrincipalDestaque = styled.div`
    display: flex;
    width: 100%;
    height: 66%;
`;

export const SNoticiaPrincipalFundo = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: url(${props => props.imgProdutoProcessos});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        height: 25rem;
    }
`

export const SNoticiaPrincipalTitulo = styled.label`
    color: #ffffff;
    background-color: rgb(0 0 0 / 35%);
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    flex-wrap: wrap;
    padding: 1rem;
    text-shadow: 1px 1px black;
`;

export const SNoticiaPrincipalDescricao = styled.div`
    color: #ffffff;
    width: calc(100% - 2rem);
    background-color: #003366;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
`;

export const SNoticiaSecundaria = styled.div`
    display: flex;
    width: 100%;
    height: 40%;
    gap: 2rem;

    @media (max-width: 768px) {
        height: 100%;
        flex-direction: column;
    }
`;

export const SNoticiaCard = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-radius: 1rem;
    background: url(${props => props.imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;

    @media (max-width: 768px) {
        flex: none;
        height: 15rem;
        width: 100%;
    }
`;

export const SNoticiaCardTitulo = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.2rem 1rem;
    color: #ffffff;
    background-color: rgb(0 0 0 / 65%);
`;

export const SNoticiaCardDescricao = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    padding: 0.8rem;
    color: #ffffff;
    background-color: #003366;
    border-radius: 0 0 1rem 1rem;
`;

export const SNoticiaLateral = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    gap: 1rem;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SNoticiaLateralColuna = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 2rem;

    @media (max-width: 1024px) {
        width: 100%;
    }

`;

export const SNoticiaLateralCard = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: calc(100% - 1.4rem);
    height: calc(100% - 1.4rem);
    background: url(${props => props.imagem});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;

    @media (max-width: 1024px) {
        height: 20rem;
    }

    @media (max-width: 768px) {
        height: 15rem;
        width: 100%;
    }
`;

export const SNoticiaLateralTitulo = styled.label`
    padding: 0.7rem;
    color: #003366;
    background-color: #ffffff;
    opacity: 0.75;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: bold;
`;

export const SNoticiaLateralDescricao = styled.label`
    padding: 0.7rem;
    color: #ffffff;
    background-color: #003366;
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    border-radius: 0 0 1rem 1rem;
`;
