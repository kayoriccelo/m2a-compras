import React from 'react';

import { 
    SMenuPrincipal, 
    SMenuPrincipalItemLink,
    SMenuItem,
    SSubmenu,
    SSubmenuItemLink,
    SDropdownIcon
} from './_styled';


export default function MenuPrincipalSofisticado() {
    return (
        <SMenuPrincipal>
            <SMenuItem>
                <SMenuPrincipalItemLink to="/inicio" activeClassName="active">
                    Início
                </SMenuPrincipalItemLink>
            </SMenuItem>

            <SMenuItem>
                <SMenuPrincipalItemLink to="/contratacoes" activeClassName="active">
                    Contratações
                </SMenuPrincipalItemLink>
            </SMenuItem>

            <SMenuItem>
                <SMenuPrincipalItemLink style={{ width: '6rem'}}>
                    Produtos <SDropdownIcon />
                </SMenuPrincipalItemLink>

                <SSubmenu>
                    <SSubmenuItemLink to="/produto-a" activeClassName="active">
                        M2A Planejamentos
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-b" activeClassName="active">
                        M2A Compras
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-c" activeClassName="active">
                        M2A Pesquisas
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-c" activeClassName="active">
                        M2A Processos
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-c" activeClassName="active">
                        M2A Processos Eletrônicos
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-c" activeClassName="active">
                        M2A Tramitações
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-c" activeClassName="active">
                        M2A Contratos
                    </SSubmenuItemLink>

                    <SSubmenuItemLink to="/produto-c" activeClassName="active">
                        M2A Fornecedores
                    </SSubmenuItemLink>
                </SSubmenu>
            </SMenuItem>

            <SMenuItem>
                <SMenuPrincipalItemLink
                    to="/sobre"
                    activeClassName="active"
                >
                    Sobre
                </SMenuPrincipalItemLink>
            </SMenuItem>

            <SMenuItem>
                <SMenuPrincipalItemLink to="/conteudo" activeClassName="active">
                    Conteúdo
                </SMenuPrincipalItemLink>
            </SMenuItem>
        </SMenuPrincipal>
    )
}