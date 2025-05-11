import React, { useState, useRef, useEffect } from 'react';

import {
    GrFormPrevious,
    GrFormNext
} from "react-icons/gr";

import ImageIpixuna from '@images/logo-pm-ipixuna-1.png';
import ImageItapipoca from '@images/logo-pm-itapipoca.png';

import BotaoMaisCliente from '@components/core/botoes/mais.clientes';

import {
    SEntidadeContainer,
    SEntidadeTitle,
    SEntidadeContent,
    SEntidadeAnterior,
    SEntidadeProximo,
    SEntidadeSlide,
    SEntidadeLogo,
    SEntidadeSlideWrapper,
    SEntidadeBotaoWrapper
} from './_styled';


const logos = [
    { id: 1, src: ImageIpixuna, alt: 'Ipixuna' },
    { id: 2, src: ImageItapipoca, alt: 'Itapipoca' },
    { id: 3, src: ImageIpixuna, alt: 'Ipixuna' },
    { id: 4, src: ImageItapipoca, alt: 'Itapipoca' },
    { id: 5, src: ImageIpixuna, alt: 'Ipixuna' },
    { id: 6, src: ImageItapipoca, alt: 'Itapipoca' },
    { id: 7, src: ImageIpixuna, alt: 'Ipixuna' },
    { id: 8, src: ImageItapipoca, alt: 'Itapipoca' },
    { id: 9, src: ImageIpixuna, alt: 'Ipixuna' },
    { id: 10, src: ImageItapipoca, alt: 'Itapipoca' },
];

export default function Entidades() {
    const [scrollX, setScrollX] = useState(0);
    const wrapperRef = useRef(null);

    const handlePrev = () => {
        if (wrapperRef.current) {
            const firstVisibleElement = wrapperRef.current.querySelector(':scope > div:first-child');
            if (firstVisibleElement) {
                const elementWidth = firstVisibleElement.offsetWidth + parseFloat(getComputedStyle(firstVisibleElement).marginRight);
                setScrollX((prevScrollX) => Math.min(prevScrollX + elementWidth, 0));
            }
        }
    };

    const handleNext = () => {
        if (wrapperRef.current) {
            const lastVisibleElement = wrapperRef.current.querySelector(':scope > div:last-child');
            const containerWidth = wrapperRef.current.offsetWidth;
            if (lastVisibleElement) {
                const elementWidth = lastVisibleElement.offsetWidth + parseFloat(getComputedStyle(lastVisibleElement).marginRight);
                const maxScroll = -(wrapperRef.current.scrollWidth - containerWidth);
                setScrollX((prevScrollX) => Math.max(prevScrollX - elementWidth, maxScroll));
            }
        }
    };

    useEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.style.transform = `translateX(${scrollX}px)`;
        }
    }, [scrollX]);

    return (
        <SEntidadeContainer>
            <SEntidadeTitle>
                Conheça alguns clientes que confiam na M2A e usam nossos produtos
            </SEntidadeTitle>

            <SEntidadeContent>
                <SEntidadeBotaoWrapper>
                    <SEntidadeAnterior onClick={handlePrev}>
                        <GrFormPrevious size={20} color='#004C99' />
                    </SEntidadeAnterior>
                </SEntidadeBotaoWrapper>

                <SEntidadeSlideWrapper ref={wrapperRef}>
                    {logos.map((logo) => (
                        <SEntidadeSlide key={logo.id}>
                            <SEntidadeLogo src={logo.src} alt={logo.alt} />
                        </SEntidadeSlide>
                    ))}
                </SEntidadeSlideWrapper>

                <SEntidadeBotaoWrapper>
                    <SEntidadeProximo onClick={handleNext}>
                        <GrFormNext size={20} color='#004C99' />
                    </SEntidadeProximo>
                </SEntidadeBotaoWrapper>
            </SEntidadeContent>

            <BotaoMaisCliente />
        </SEntidadeContainer>
    );
};