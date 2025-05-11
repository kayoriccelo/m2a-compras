import React, { useRef, useEffect, useState } from 'react';

import { BsDatabaseDown } from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { TbZoomMoney } from "react-icons/tb";
import { IoMdPaper } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

import CardEstatistica from '@components/core/cards/card.estatistica';
import { CardEstatisticaItem } from '@components/core/cards/card.estatistica';
import Contador from '@components/core/contador';

import {
    SEstatisticasContainer,
    SEstatisticasContent
} from './_styled';


export default function Estatisticas() {
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
        <SEstatisticasContainer
            ref={ref}
        >
            <SEstatisticasContent>
                <CardEstatistica
                    titulo={
                        <>
                            <label>+ </label>

                            <Contador
                                visible={visibleState}
                                valorFinal={300}
                                duracao={2500}
                            />
                        </>
                    }
                    descricao="Clientes"
                />

                <CardEstatistica
                    titulo={
                        <>
                            <label>+ </label>

                            <Contador
                                visible={visibleState}
                                valorFinal={10000}
                                duracao={2500}
                            />

                            <label> mil </label>
                        </>
                    }
                    descricao="Contratações"
                />

                <CardEstatistica
                    titulo={
                        <>
                            <label>+ </label>

                            <Contador
                                visible={visibleState}
                                valorFinal={5000}
                                duracao={2500}
                            />

                            <label> mil </label>
                        </>
                    }
                    descricao="Fornecedores"
                />

                <CardEstatistica
                    titulo={
                        <>
                            <label>+ </label>

                            <Contador
                                visible={visibleState}
                                valorFinal={15000}
                                duracao={2500}
                            />

                            <label> mil </label>
                        </>
                    }
                    descricao="Contratos"
                />
            </SEstatisticasContent>

            <CardEstatisticaItem
                icone={<HiOutlineDocumentDuplicate />}
                titulo='+ 300 mil'
                descricao="dfd's criados"
            />

            <CardEstatisticaItem
                icone={<TbZoomMoney />}
                titulo='+ 250 mil'
                descricao="pesquisas realizadas"
            />

            <CardEstatisticaItem
                icone={<HiOutlineClipboardDocumentCheck />}
                titulo='+ 200 mil'
                descricao="pedidos de cotação respondidos"
            />

            <CardEstatisticaItem
                icone={<BsDatabaseDown />}
                titulo='+ 1 milhão'
                descricao='preços importados'
            />

            <CardEstatisticaItem
                icone={<IoMdPaper />}
                titulo='+ 200 mil'
                descricao='licitações públicadas'
            />

            <CardEstatisticaItem
                icone={<IoNewspaperOutline />}
                titulo='+ 50 mil'
                descricao="contratações diretas públicadas"
            />

            <CardEstatisticaItem
                icone={<GiNewspaper />}
                titulo='+ 20 mil'
                descricao="procedimentos auxiliares públicados"
            />

            <CardEstatisticaItem
                icone={<VscFolderLibrary />}
                titulo='+ 100 mil'
                descricao="processos eletrônicos gerenciados"
            />

        </SEstatisticasContainer >
    );
};
