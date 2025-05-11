import React, { useRef, useEffect, useState } from 'react';

import { VscEditorLayout } from "react-icons/vsc";
import { BiSolidBookReader } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";

import {
    SQualidadesContainer,
    SQualidadesContent,
    SQualidadesImagem,
    SQualidadesDescricao,
    SQualidadesTitulo,
    SQualidadesTexto
} from './_styled';


export default function Qualidades() {
    const ref = useRef(null)
    const [visibleState, setVisibleState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleState(true);
                    } else {
                        setVisibleState(false);
                    }
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
        <SQualidadesContainer>
            <SQualidadesContent
                ref={ref}
                style={{ justifyContent: 'flex-start' }}
                className={visibleState ? 'visible-right' : 'invisible-right'}
            >
                <SQualidadesImagem>
                    <GrTechnology size={200} />
                </SQualidadesImagem>

                <SQualidadesTexto>
                    <SQualidadesTitulo>
                        Tecnologia de ponta
                    </SQualidadesTitulo>

                    <SQualidadesDescricao>
                        Estamos evoluindo constantemente as nossas soluções, tudo isso para garantir que nossos clientes tenham acesso à tecnologia de qualidade, proporcionando uma experiência agradável, prática e segura.

                        Todos os nossos sistemas são totalmente online e podem ser acessados de qualquer aparelho que navega pela internet.
                    </SQualidadesDescricao>
                </SQualidadesTexto>
            </SQualidadesContent>

            <SQualidadesContent
                ref={ref}
                style={{ justifyContent: 'flex-end', flexDirection: 'row-reverse' }}
                className={visibleState ? 'visible-left' : 'invisible-left'}
            >
                <SQualidadesImagem>
                    <BiSolidBookReader size={200} />
                </SQualidadesImagem>

                <SQualidadesTexto>
                    <SQualidadesTitulo>
                        Somos Especialista
                    </SQualidadesTitulo>

                    <SQualidadesDescricao>
                        Além da tecnologia, contamos com equipe de especialistas com vasta experiência no negócio, sempre preocupados em manter a qualidade e a legalidade jurídica de nossas soluções.
                    </SQualidadesDescricao>
                </SQualidadesTexto>
            </SQualidadesContent>

            <SQualidadesContent
                ref={ref}
                style={{ justifyContent: 'flex-start' }}
                className={visibleState ? 'visible-right' : 'invisible-right'}
            >
                <SQualidadesImagem>
                    <VscEditorLayout size={200} />
                </SQualidadesImagem>

                <SQualidadesTexto>
                    <SQualidadesTitulo>
                        Suporte diferenciado
                    </SQualidadesTitulo>

                    <SQualidadesDescricao>
                        Fornecer um atendimento de qualidade é essencial para mantermos a qualidade de nossas soluções. Queremos estar sempre próximos aos nossos clientes, entender suas necessidades e solucioná-los da melhor maneira.
                    </SQualidadesDescricao>
                </SQualidadesTexto>
            </SQualidadesContent>
        </SQualidadesContainer>
    );
};
