import React, { useState, useEffect, useRef } from 'react';


export default function Contador({ valorFinal, visible, duracao = 1000 }) {
    const [contador, setContador] = useState(0);
    const frame = useRef(0);

    useEffect(() => {
        const startTime = performance.now();
        const animateValue = () => {
            const currentTime = performance.now();
            const timeElapsed = currentTime - startTime;

            const progress = Math.min(timeElapsed / duracao, 1);
            setContador(Math.ceil(progress * valorFinal));

            if (progress < 1) {
                frame.current = requestAnimationFrame(animateValue);
            }
        };

        frame.current = requestAnimationFrame(animateValue);

        return () => cancelAnimationFrame(frame.current);
    }, [valorFinal, duracao, visible]);

    return <span>{contador}</span>;
};
