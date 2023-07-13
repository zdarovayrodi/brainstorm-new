import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    background: white;
    height: 80px;
    margin-top: -82px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: rgba(0,0,0,.05) 0px 3px 12px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        box-shadow: none;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    /* max-width: 1200px; */
`

export const NavbarLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1245px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 1245px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    // &.active {
    //     border-bottom: 3px solid #01bf71;
    // };
`

export const NavLogo = styled.img`
    max-width: 40px;
    width: 100%;
    // left: 0;
    object-fit: cover;
`