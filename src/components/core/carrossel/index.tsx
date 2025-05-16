import React, { useRef, useState, useEffect } from 'react';
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";


import {
    SCarrosselContainer,
    SCarrosselWrapper,
    SCarrosselItem,
    SCarrosselImagem,
    SCarrosselItemTexto,
    SCarrosselDescricao,
    SCarrosselAssistir,
    SCarrosselTitulo,
    SControlButton,
    SIndicatorsContainer,
    SIndicator,
} from './_styled';

export default function Carrossel({ windowWidth, registros }) {
    const totalItems = registros.length;
    const wrapperRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    
    const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage))

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(totalPages - 1, prevIndex + 1)
        );
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (windowWidth <= 768) {
            setItemsPerPage(1)

            setTotalPages(Math.ceil(totalItems / itemsPerPage))
        }
    }, [windowWidth])

    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
            wrapperRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    return (
        <SCarrosselContainer>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#ffffff',
                        height: '35rem',
                        width: '100%',
                        zIndex: 1,
                    }}
                >
                    <SControlButton onClick={goToPrevious}>
                        <MdOutlineNavigateBefore />
                    </SControlButton>
                </div>

                <SCarrosselWrapper ref={wrapperRef}>
                    {registros.map((registro, index) => (
                        <SCarrosselItem key={index}>
                            <SCarrosselImagem imagem={registro.imagem} />

                            <SCarrosselItemTexto>
                                <SCarrosselTitulo>
                                    {registro.titulo}
                                </SCarrosselTitulo>

                                <SCarrosselDescricao>
                                    {registro.descricao}
                                </SCarrosselDescricao>

                                <SCarrosselAssistir>
                                    Assistir
                                </SCarrosselAssistir>
                            </SCarrosselItemTexto>
                        </SCarrosselItem>
                    ))}
                </SCarrosselWrapper>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#ffffff',
                        height: '35rem',
                        width: '100%',
                        zIndex: 1,
                    }}
                >
                    <SControlButton onClick={goToNext}>
                        <MdNavigateNext />
                    </SControlButton>
                </div>
            </div>


            <SIndicatorsContainer>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <SIndicator
                        key={index}
                        className={currentIndex === index ? 'active' : ''}
                        onClick={() => goToIndex(index)}
                    />
                ))}
            </SIndicatorsContainer>
        </SCarrosselContainer>
    );
}
