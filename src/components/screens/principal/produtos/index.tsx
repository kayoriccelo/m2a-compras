import React from "react"

import CardProduto from "@components/core/cards/produto";
import BotaoMaisProdutos from "@components/core/botoes/mais.produtos";
import imgProdutoCompras from "@images/produto_compras.png";
import imgProdutoPesquisas from "@images/produto_pesquisa.png";
import imgProdutoProcessos from "@images/produto_processos.png";
import imgProdutoContratos from "@images/produto_contratos.png";
import imgProdutoFornecedores from "@images/produto_fornecedores.png";

import {
    SProdutosContainer,
    SProdutosContent,
    SProdutosContentTitulo,
    SProdutosTitulo,
    SProdutosDescricao,
    SProdutosContentCartoes
} from "./_styled"


export default function Produtos() {
    return (
        <SProdutosContainer>
            <SProdutosContent>
                <SProdutosContentTitulo>
                    <SProdutosTitulo>
                        Nossas soluções são completas para que a gestão governamental do seu munícipio seja realizada com excelência.
                    </SProdutosTitulo>

                    <SProdutosDescricao>
                        Nosso portfólio completo permite centralizar todas as soluções de gestão governamental em um único local. Desde o planejamento, passando pela documento de formalização de demanda, processos administrativos e contratação, até a gestão de contratos.
                    </SProdutosDescricao>
                </SProdutosContentTitulo>

                <SProdutosContentCartoes>
                    <CardProduto
                        titulo='M2A Planejamentos'
                        descricao='Planeje suas demandas'
                        url_imagem={imgProdutoContratos}
                        style={{ background: 'royalblue'}}
                    />

                    <CardProduto
                        titulo='M2A Compras'
                        descricao='Crie suas demandas'
                        url_imagem={imgProdutoCompras}
                        style={{ background: 'rgba(0, 110, 156, 0.69)'}}
                    />

                    <CardProduto
                        titulo='M2A Pesquisas'
                        descricao='Realize suas cotações de preço'
                        url_imagem={imgProdutoPesquisas}
                        style={{ background: '#0F9B8E'}}
                    />

                    <CardProduto
                        titulo='M2A Processos'
                        descricao='Parametrize suas contratações'
                        url_imagem={imgProdutoProcessos}
                        style={{ background: '#478dcc'}}
                    />

                    <CardProduto
                        titulo='M2A Fornecedores'
                        descricao='Participe de contratações'
                        url_imagem={imgProdutoFornecedores}
                        style={{ background: '#2b576e'}}
                    />

                    <CardProduto
                        titulo='M2A Contratos'
                        descricao='Gerencie seus contratos'
                        url_imagem={imgProdutoContratos}
                        style={{ background: '#2F4F4F'}}
                    />
                </SProdutosContentCartoes>
            </SProdutosContent>

            <BotaoMaisProdutos />
        </SProdutosContainer>
    )
}
