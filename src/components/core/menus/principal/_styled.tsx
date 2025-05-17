import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import '@fontsource/roboto';
import { IoIosArrowDown } from 'react-icons/io'; // Exemplo de ícone


const growUnderline = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

export const SMenuPrincipal = styled.ul`
    margin: 1rem;
    padding: 0 40px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    background: #ffffff;
    border-radius: 3rem;

    @media (max-width: 1024px) {
        height: 3rem;
    }

    @media (max-width: 768px) {
        height: 2rem;
    }
`;

export const SMenuPrincipalItem = styled.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
`;

export const SMenuPrincipalItemLink = styled(Link)<{children?: React.ReactNode}>`
    color: #3B3D3D;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: #007bff; /* Cor de destaque */
        transition: width 0.3s ease-out;
    }

    &:hover {
        color: #007bff;
        &::after {
            animation: ${growUnderline} 0.3s ease-out forwards;
        }
    }

    &[aria-current="page"] {
        color: #007bff;
        font-weight: 700;
    }

    @media (max-width: 1024px) {
        font-size: 12px;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const SSubmenu = styled.ul`
    position: absolute;
    top: 100%;
    left: -50%;
    transform: translateX(-50%);
    background: #ffffff;
    border-radius: 0.5rem;
    list-style-type: none;
    padding: 1rem 1.5rem;
    margin: 0;
    width: 18rem;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out;
`;

export const SSubmenuItemLink = styled(Link)`
    display: block;
    padding: 0.7rem 1rem;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: #555;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 0.25rem;
    text-align: left;

    &:hover {
        background-color: #f8f8f8;
        color: #007bff;
    }
`;

export const SDropdownIcon = styled(IoIosArrowDown)`
    font-size: 0.8rem;
`;

export const SMenuItem = styled.li`
    margin: 0 1.5rem;
    position: relative;
    display: flex;
    align-items: center;

    &:hover > ul { /* Seleciona o Submenu (ul) que é filho direto ao passar o mouse */
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0); /* Remove o translateY(-5px) no hover do Submenu */
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @media (max-width: 1024px) {
        margin: 0 1.5rem;
    }

    @media (max-width: 768px) {
        margin: 0 0.5rem;
    }
`;
