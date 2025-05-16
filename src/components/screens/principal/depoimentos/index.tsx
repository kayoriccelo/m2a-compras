import React from 'react'

import Carrossel from "@components/core/carrossel";

import imgProductCompras from "@images/produto_compras.png";
import imgProductPesquisas from "@images/produto_pesquisa.png";
import imgProductProcessos from "@images/produto_processos.png";

import {
    SDepoimentosBloco,
    SDepoimentosTitulo,
} from "./_styled";


export default function Depoimentos({ windowWidth }) {
    return (
        <SDepoimentosBloco>
            <SDepoimentosTitulo>
                Depoimentos
            </SDepoimentosTitulo>

            <Carrossel
                windowWidth={windowWidth}
                registros={[
                    {
                        titulo: 'João Silva',
                        descricao: `A M2A transformou completamente nossos processos internos. A implementação do sistema foi suave e a equipe de suporte é excepcional. Recomendo fortemente!`,
                        imagem: imgProductCompras
                    },
                    {
                        titulo: 'Maria Santos',
                        descricao: `Estamos muito satisfeitos com as soluções da M2A. O sistema é intuitivo e nos ajudou a reduzir custos operacionais em 30%. Excelente parceria!`,
                        imagem: imgProductPesquisas
                    },
                    {
                        titulo: 'Pedro Oliveira',
                        descricao: `A automação que a M2A implementou revolucionou nossa gestão de compras. O atendimento é sempre ágil e profissional. Superou todas as expectativas!`,
                        imagem: imgProductProcessos
                    },
                    {
                        titulo: 'Ana Rodrigues',
                        descricao: `Depois que implementamos as soluções da M2A, nossa produtividade aumentou significativamente. A equipe técnica é muito competente e dedicada.`,
                        imagem: imgProductCompras
                    },
                    {
                        titulo: 'Carlos Mendes',
                        descricao: `Excelente experiência com a M2A! O sistema é robusto e a equipe sempre está disposta a nos ajudar. Melhor decisão que tomamos para nossa empresa.`,
                        imagem: imgProductPesquisas
                    },
                    {
                        titulo: 'Fernanda Lima',
                        descricao: `A parceria com a M2A tem sido fundamental para nosso crescimento. O suporte é impecável e as soluções são perfeitamente adaptadas às nossas necessidades.`,
                        imagem: imgProductProcessos
                    },
                    {
                        titulo: 'Ricardo Almeida',
                        descricao: `Impressionante como a M2A entende as necessidades do cliente. O sistema é completo e a equipe sempre traz soluções inovadoras para nossos desafios.`,
                        imagem: imgProductCompras
                    },
                    {
                        titulo: 'Beatriz Costa',
                        descricao: `A M2A nos ajudou a otimizar todos os processos. O retorno sobre o investimento foi rápido e o suporte técnico é sempre muito eficiente.`,
                        imagem: imgProductPesquisas
                    },
                    {
                        titulo: 'Lucas Ferreira',
                        descricao: `Desde que começamos a trabalhar com a M2A, nossa eficiência operacional melhorou drasticamente. A equipe é muito profissional e comprometida.`,
                        imagem: imgProductProcessos
                    }
                ]} />
        </SDepoimentosBloco>
    );
};
