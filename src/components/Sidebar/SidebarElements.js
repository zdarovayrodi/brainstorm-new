import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999; // overlap
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; // slide in from top
`

export const CloseIcon = styled(FaTimes)`
    color: black;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    color: black;
`

export const SidebarWrapper = styled.div`
    color: black;
    height: 80%;
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
    &:focus {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    width: 100%;
`


export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 80px);
    text-align: center;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(7, 60px);
    }
`

export const SidebarBtn = styled(LinkScroll)`
    background: black;
    padding: 16px 64px;
    border-radius: 25px;
    
    color: black;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    margin-top: 200px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    &:focus {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`