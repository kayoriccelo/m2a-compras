import React, { useRef, useState, useEffect } from 'react';
import {
    SCarrosselContainer,
    SCarrosselWrapper,
    SCarrosselItem,
    SCarrosselImage,
    SControlsContainer,
    SControlButton,
    SIndicatorsContainer,
    SIndicator,
} from './_styled';

export default function Carrossel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const wrapperRef = useRef(null);
    const itemsPerPage = 3;
    const totalItems = images.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

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
        if (wrapperRef.current) {
            wrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
            wrapperRef.current.style.transform = `translateX(-${currentIndex * 100
                }%)`;
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
                    <SControlButton onClick={goToPrevious}>&lt;</SControlButton>
                </div>

                <SCarrosselWrapper ref={wrapperRef}>
                    {images.map((src, index) => (
                        <SCarrosselItem key={index}>
                            <SCarrosselImage src={src} />
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
                    <SControlButton onClick={goToNext}>&gt;</SControlButton>
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
