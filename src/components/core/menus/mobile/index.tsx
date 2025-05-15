import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';


const SMenuMobileContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const SMenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1001;
    color: #ffffff;
    margin: 1rem;

    &:hover {
        color: #007bff;
    }

    @media (max-width: 1024px) {
        color: #dfdfdf;
    }
`;

const SOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const SMobileMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100%;
    width: 280px;
    background: #ffffff;
    z-index: 1002;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: right 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow-y: auto;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
`;

const SMobileMenuItem = styled(Link)`
    color: #3B3D3D;
    font-size: 18px;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
        color: #007bff;
    }
`;

const SDropdown = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3B3D3D;
    font-size: 18px;
    cursor: pointer;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f1f1;
    position: relative;

    &:hover {
        color: #007bff;
    }
`;

const SIconWrapper = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const SSubmenuMobile = styled.div<{ isOpen: boolean }>`
    max-height: ${({ isOpen }) => (isOpen ? '00px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
`;

const SSubmenuItemLink = styled(Link)`
    color: #555;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #007bff;
    }
`;

/* =======================
    Componente do Menu
======================= */

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setSubmenuOpen(false);
    };

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <SMenuMobileContainer>
            <SMenuButton onClick={toggleMenu}>
                {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </SMenuButton>

            {isOpen && <SOverlay onClick={toggleMenu} />}

            <SMobileMenu isOpen={isOpen}>
                <SMobileMenuItem to="/inicio">Início</SMobileMenuItem>
                <SMobileMenuItem to="/contratacoes">Contratações</SMobileMenuItem>

                <SDropdown onClick={toggleSubmenu}>
                    <span>Produtos</span>
                    <SIconWrapper isOpen={submenuOpen}>
                        <IoIosArrowDown size={16} />
                    </SIconWrapper>
                </SDropdown>

                <SSubmenuMobile isOpen={submenuOpen}>
                    <SSubmenuItemLink to="/produto-a">M2A Planejamentos</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-b">M2A Compras</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-c">M2A Pesquisas</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-d">M2A Processos</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-e">M2A Processos Eletrônicos</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-f">M2A Tramitações</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-g">M2A Contratos</SSubmenuItemLink>
                    <SSubmenuItemLink to="/produto-h">M2A Fornecedores</SSubmenuItemLink>
                </SSubmenuMobile>

                <SMobileMenuItem to="/sobre">Sobre</SMobileMenuItem>
                <SMobileMenuItem to="/conteudo">Conteúdo</SMobileMenuItem>
            </SMobileMenu>
        </SMenuMobileContainer>
    );
};

export default MenuMobile;
