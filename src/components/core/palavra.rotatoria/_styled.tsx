import styled, { keyframes } from "styled-components";


const clipAndChange = keyframes`
    0% { transform: translateY(-100%); opacity: 0; }
    40% { transform: translateY(0); opacity: 1}
    100% { transform: translateY(0); opacity: 0}
`;

export const WordRotatorContainer = styled.label`

`;

export const RotatingWord = styled.label`
    display: inline-block; /* Importante para a largura */
    animation: ${clipAndChange} 3.5s infinite;
`;