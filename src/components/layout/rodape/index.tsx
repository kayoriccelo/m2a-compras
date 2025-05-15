import React from "react"

import { SRodape } from "./_styled"
import { IRodape } from "./_interface"
import styled from 'styled-components';


export const SRodapeContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SCentralAtendimento = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const STitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
`;

export const SSuporteSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SSubTitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.5rem;
`;

export const STelefone = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
`;

export const SContatoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SLink = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.45);
    }
`;

export const SDuvidasSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    line-height: 1.5;
`;

export const SEmailLink = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color:rgba(255, 255, 255, 0.45);
    }
`;

export const SHorariosSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SCopyright = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #eee;
`;


export default function Rodape() {
    return (
        <SRodape>
            <SRodapeContainer>
                <SCentralAtendimento>
                    <STitle>CENTRAL DE ATENDIMENTO</STitle>
                    
                    <SSuporteSection>
                        <SSubTitle>Suporte ao fornecedor</SSubTitle>
                        <STelefone>(85) 9 9821-0004</STelefone>
                        <STelefone>(85) 9 9860-2986</STelefone>
                    </SSuporteSection>

                    <SSuporteSection>
                        <SSubTitle>Suporte ao ente público</SSubTitle>
                        <STelefone>(88) 9 9995-6013</STelefone>
                        <STelefone>(85) 9 9827-6113</STelefone>
                        <STelefone>(85) 9 9732-4827</STelefone>
                        <STelefone>(85) 9 9837-0004</STelefone>
                        <STelefone>(85) 9 9801-4444</STelefone>
                    </SSuporteSection>

                    <SContatoSection>
                        <SLink href="#">Abra um chamado</SLink>
                        <SLink href="#">Formulário de contato</SLink>
                    </SContatoSection>
                </SCentralAtendimento>

                <SDuvidasSection>
                    <SSubTitle>Dúvidas ou sugestões?</SSubTitle>
                    <SText>Entre em contato conosco atráves de nossos canais de atendimento ou através do email.</SText>
                    <SEmailLink href="mailto:suporte@m2atecnologia.com.br">suporte@m2atecnologia.com.br</SEmailLink>
                </SDuvidasSection>

                <SHorariosSection>
                    <STitle>HORÁRIOS DE ATENDIMENTO</STitle>
                    <SText>De segunda a sexta, exceto feriados, das 08h às 12h e das 13h às 17h30, horário de Brasília.</SText>
                </SHorariosSection>

                <SCopyright>
                    <SText>©Copyright 2025 M2A Tecnologia Ltda. Todos os direitos reservados.</SText>
                </SCopyright>
            </SRodapeContainer>
        </SRodape>
    )
}
