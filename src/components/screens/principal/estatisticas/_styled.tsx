import styled from "styled-components";


export const SEstatisticasContainer = styled.div`
    min-height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: calc(100% - 4rem);
    margin: 40px auto;
    padding: 2rem;
    background: url(
        "data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10v10h-10z' fill='rgba(255,255,255,0.03)'/%3E%3Ccircle cx='5' cy='5' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E"),
        linear-gradient(94.76deg, #003366 0%, #004080 51.58%, #004C99 99.45%
    );
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    border-radius: 2rem;
    border-bottom: 1.2rem solid #003366;
    border-top: 1.2rem solid #003366;
    margin-top: 10rem;
`;

export const SEstatisticasContent = styled.div`
    margin-top: -7rem!important;
    min-height: 10rem;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 4rem);
    margin: 20px auto;
    background: #003366;
    border-radius: 2rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.34);

    @media (max-width: 768px) {
        width: calc(100% - 1rem);
        margin: 5px auto;
    }
`;
