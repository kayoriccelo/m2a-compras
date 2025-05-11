import styled from "styled-components";


export const SProdutosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    border-radius: 2rem;
`;

export const SProdutosContent = styled.div`
    flex-wrap: wrap;
    display: flex;
`;

export const SProdutosContentTitulo = styled.div`
    flex: 1 1 calc(20% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 8rem;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export const SProdutosContentCartoes = styled.div`
    flex: 3 1 calc(55% - 20px);
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;

    @media (max-width: 768px) {
        flex: 1;
        padding: 1rem;
    }
`;

export const SProdutosTitulo = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #003366;
    min-width: 30rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        min-width: 16rem;
    }
`;

export const SProdutosDescricao = styled.label`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 1.2rem;
`;
