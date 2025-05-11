import React, { useState, useEffect } from 'react';

import { SCabecalho } from './_styled';


export default function Cabecalho ({ children }) {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Defina a altura em pixels a partir da qual o cabeçalho deve fixar
            const scrollThreshold = 100;

            if (window.scrollY > scrollThreshold && !isFixed) {
                setIsFixed(true);
            } else if (window.scrollY <= scrollThreshold && isFixed) {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);

    const cabecalhoClassName = isFixed ? 'cabecalho-fixo' : 'cabecalho-suspenso';

    return (
        <SCabecalho className={cabecalhoClassName}>
            {children}
        </SCabecalho>
    );
};
