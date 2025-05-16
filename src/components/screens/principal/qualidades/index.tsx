import React, { 
    useRef, 
    useEffect, 
    useState 
} from 'react';

import { VscEditorLayout } from "react-icons/vsc";
import { BiSolidBookReader } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";

import { IQuantidadeItem } from './_interface';
import {
    SQualidadesContainer,
    SQualidadesContent,
    SQualidadesImagem,
    SQualidadesDescricao,
    SQualidadesTitulo,
    SQualidadesTexto
} from './_styled';


const QualidadeItem = ({ icone, titulo, descricao, entrada, saida, style }: IQuantidadeItem) => {
    const ref = useRef(null)
    const [visivel, alimentarVisivel] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        alimentarVisivel(true);
                    } else {
                        alimentarVisivel(false);
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

    useEffect(() => {
        if (visivel) {
            console.log("Componente visível!");
        };
    }, [visivel]);

    return (
        <SQualidadesContent
            ref={ref}
            style={style}
            className={visivel ? entrada : saida}
        >
            <SQualidadesImagem>
                {icone}
            </SQualidadesImagem>

            <SQualidadesTexto>
                <SQualidadesTitulo>
                    {titulo}
                </SQualidadesTitulo>

                <SQualidadesDescricao>
                    {descricao}
                </SQualidadesDescricao>
            </SQualidadesTexto>
        </SQualidadesContent>
    )
}


export default function Qualidades() {
    return (
        <SQualidadesContainer>
            <QualidadeItem
                icone={<GrTechnology size={200} />}
                titulo="Tecnologia de ponta"
                descricao="Estamos evoluindo constantemente as nossas soluções, tudo isso para garantir que nossos clientes tenham acesso à tecnologia de qualidade, proporcionando uma experiência agradável, prática e segura.

                Todos os nossos sistemas são totalmente online e podem ser acessados de qualquer aparelho que navega pela internet."
                style={{ justifyContent: 'flex-start' }}
                entrada={'visible-right'}
                saida={'invisible-right'}
            />

            <QualidadeItem
                icone={<BiSolidBookReader size={200} />}
                titulo="Somos Especialista"
                descricao="Além da tecnologia, contamos com equipe de especialistas com vasta experiência no negócio, sempre preocupados em manter a qualidade e a legalidade jurídica de nossas soluções."
                style={{ justifyContent: 'flex-end', flexDirection: 'row-reverse' }}
                entrada={'visible-left'}
                saida={'invisible-left'}
            />

            <QualidadeItem
                icone={<VscEditorLayout size={200} />}
                titulo="Suporte diferenciado"
                descricao="Fornecer um atendimento de qualidade é essencial para mantermos a qualidade de nossas soluções. Queremos estar sempre próximos aos nossos clientes, entender suas necessidades e solucioná-los da melhor maneira."
                style={{ justifyContent: 'flex-start' }}
                entrada={'visible-right'}
                saida={'invisible-right'}
            />
        </SQualidadesContainer>
    );
};
