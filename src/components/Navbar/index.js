import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLogo } from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavbarLogo to="main" smooth={true} duration={1500} spy={true} exact='true' offset={-80}>
                    <NavLinks to="main" smooth={true} duration={1500} spy={true} exact='true' offset={-80}>
                        {/* <NavLogo src={Flag} alt="Logo" /> */}
                        Brainstorm</NavLinks>
                </NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                
                <NavMenu>
                    <NavItem>
                        <NavLinks to="main" smooth={true} duration={1000} spy={true} exact='true' offset={-100}>Главная</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="whywe" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Наши преимущества</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="lessons" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Виды занятий</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="freelesson" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Бесплатное занятие</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="learn" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Зачем учить?</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="plans" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Стоимость</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="footer" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Контакты</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>

    )
}

export default Navbar