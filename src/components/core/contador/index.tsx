import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import { IContador } from './_interface';


export default function Contador({ valorFinal, visible, duracao = 1000 }: IContador) {
    const [contador, setContador] = useState(0);
    const frame = useRef(0);

    useEffect(() => {
        const startTime = performance.now();

        const animateValue = () => {
            const currentTime = performance.now();
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duracao, 1);
            const valorAtual = Math.ceil(progress * valorFinal);
            const valorArredondado = Math.ceil(valorAtual / 100) * 100;
        
            setContador(Math.min(valorArredondado, valorFinal));

            if (progress < 1) {
                frame.current = requestAnimationFrame(animateValue);
            }
        };

        frame.current = requestAnimationFrame(animateValue);

        return () => cancelAnimationFrame(frame.current);
    }, [valorFinal, duracao, visible]);

    return <span>{contador}</span>;
};
