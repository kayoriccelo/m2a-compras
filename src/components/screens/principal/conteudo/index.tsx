import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import imgProdutoCompras from "@images/produto_compras.png";
import imgProdutoPesquisas from "@images/produto_pesquisa.png";
import imgProdutoProcessos from "@images/produto_processos.png";
import imgProdutoContratos from "@images/produto_contratos.png";
import imgProdutoFornecedores from "@images/produto_fornecedores.png";


const GloboContainer = styled.div`
    height: 60rem;
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const Globo = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #0057b7, #003580);
  position: absolute;
  box-shadow: 0 8px 32px rgba(0, 87, 183, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 1rem;
  }
`;

const Card = styled(motion.div)`
  width: 14rem;
  height: 8rem;
  background-color: rgba(255, 255, 255, 0.9);
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  margin: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  z-index: 1;
  overflow: hidden;
  border-bottom: 1px solid #ffffff;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.13);
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 70px;
    font-size: 0.8rem;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

const positions = [
    // Círculo interno
    { x: -0, y: -300 },
    { x: 0, y: 300 },
    { x: -300, y: 200 },
    { x: 300, y: 200 },
    { x: -390, y: 0 },
    { x: 390, y: 0 },
    { x: -300, y: -200 },
    { x: 300, y: -200 },
];

const GloboInterativo = ({ data, isVisible }) => {
    const animationVariants = {
        hidden: { opacity: 0, scale: 0.5, x: 0, y: 0 },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            x: positions[index].x,
            y: positions[index].y,
            transition: {
                delay: index * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
            },
        }),
    };

    return (
        <GloboContainer>
            <Globo
                key={isVisible ? 'visible' : 'hidden'}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                Conteúdos
            </Globo>
            
            {data?.map((conteudo, index) => (
                <Card
                    key={`${index}-${isVisible}`}
                    custom={index}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={animationVariants}
                    bgImage={conteudo.imagem}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            background: 'rgba(0, 110, 156, 0.69)',
                            padding: '0.5rem 0.8rem',
                            borderRadius: '0.5rem'
                        }}
                    >
                    {conteudo.titulo}
                    </div>
                </Card>
            ))}
        </GloboContainer>
    );
};

const DadosExemplo = [
    // Círculo interno
    { id: 1, titulo: 'Governança Digital', imagem: imgProdutoProcessos },
    { id: 2, titulo: 'Soluções Integradas', imagem: imgProdutoCompras },
    { id: 3, titulo: 'Segurança de Dados', imagem: imgProdutoPesquisas },
    { id: 4, titulo: 'Inovação Tecnológica', imagem: imgProdutoContratos },
    { id: 5, titulo: 'Atendimento ao Cidadão', imagem: imgProdutoFornecedores },
    { id: 6, titulo: 'Transformação Digital', imagem: imgProdutoProcessos },
    { id: 7, titulo: 'Parcerias Estratégicas', imagem: imgProdutoCompras },
    { id: 8, titulo: 'Sustentabilidade', imagem: imgProdutoPesquisas },
];

const Conteudo = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref}>
            <GloboInterativo data={DadosExemplo} isVisible={isVisible} />
        </div>
    );
};

export default Conteudo;

