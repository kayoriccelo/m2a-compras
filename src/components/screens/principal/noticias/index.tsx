import React from 'react';

import {
    SNoticiaContainer,
    SNoticiaPrincipal,
    SNoticiaLista,
    SNoticiaListaTitulo,
    SNoticiaListaItem,
    SNoticiaListaItemNumero,
    SNoticiaListaItemTexto,
    SNoticiaListaItemTitulo,
    SNoticiaListaItemData,
    SNoticiaListaItemImagem,
    SNoticiaPrincialImagem
} from "./_styled";


export default function Noticias() {

    return (
        <SNoticiaContainer>
            <SNoticiaPrincipal>
                <SNoticiaPrincialImagem />
            </SNoticiaPrincipal>

            <SNoticiaLista>
                <SNoticiaListaTitulo>
                    Melhores nóticias
                </SNoticiaListaTitulo>

                <SNoticiaListaItem>
                    <SNoticiaListaItemNumero>
                        4°
                    </SNoticiaListaItemNumero>

                    <SNoticiaListaItemTexto>
                        <SNoticiaListaItemTitulo>
                            Quarta Nóticia
                        </SNoticiaListaItemTitulo>

                        <SNoticiaListaItemData>
                            12 de maio
                        </SNoticiaListaItemData>
                    </SNoticiaListaItemTexto>

                    <SNoticiaListaItemImagem />
                </SNoticiaListaItem>

                <SNoticiaListaItem>
                    <SNoticiaListaItemNumero>
                        5°
                    </SNoticiaListaItemNumero>

                    <SNoticiaListaItemTexto>
                        <SNoticiaListaItemTitulo>
                            Quinta Nóticia
                        </SNoticiaListaItemTitulo>

                        <SNoticiaListaItemData>
                            11 de maio
                        </SNoticiaListaItemData>
                    </SNoticiaListaItemTexto>

                    <SNoticiaListaItemImagem />
                </SNoticiaListaItem>

                <SNoticiaListaItem>
                    <SNoticiaListaItemNumero>
                        6°
                    </SNoticiaListaItemNumero>

                    <SNoticiaListaItemTexto>
                        <SNoticiaListaItemTitulo>
                            Sexta Nóticia
                        </SNoticiaListaItemTitulo>

                        <SNoticiaListaItemData>
                            10 de maio
                        </SNoticiaListaItemData>
                    </SNoticiaListaItemTexto>

                    <SNoticiaListaItemImagem />
                </SNoticiaListaItem>

                <SNoticiaListaItem>
                    <SNoticiaListaItemNumero>
                        7°
                    </SNoticiaListaItemNumero>

                    <SNoticiaListaItemTexto>
                        <SNoticiaListaItemTitulo>
                            Sétima Nóticia
                        </SNoticiaListaItemTitulo>

                        <SNoticiaListaItemData>
                            10 de maio
                        </SNoticiaListaItemData>
                    </SNoticiaListaItemTexto>

                    <SNoticiaListaItemImagem />
                </SNoticiaListaItem>

                <SNoticiaListaItem>
                    <SNoticiaListaItemNumero>
                        8°
                    </SNoticiaListaItemNumero>

                    <SNoticiaListaItemTexto>
                        <SNoticiaListaItemTitulo>
                            Oitava Nóticia
                        </SNoticiaListaItemTitulo>

                        <SNoticiaListaItemData>
                            10 de maio
                        </SNoticiaListaItemData>
                    </SNoticiaListaItemTexto>

                    <SNoticiaListaItemImagem />
                </SNoticiaListaItem>
            </SNoticiaLista>
        </SNoticiaContainer>
    );
};
