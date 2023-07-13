import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
    SideBtnWrap
} from './SidebarElements'
import { Button } from '../Button';
import { ArrowRight } from '../Icons';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>
                        <SidebarLink to="main" smooth={true} duration={1000} spy={true} exact='true' offset={-100} onClick={toggle}>Главная</SidebarLink>
                        <SidebarLink to="whywe" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Наши преимущества</SidebarLink>
                        <SidebarLink to="lessons" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Виды занятий</SidebarLink>
                        <SidebarLink to="freelesson" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Бесплатное занятие</SidebarLink>
                        <SidebarLink to="learn" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Зачем учить?</SidebarLink>
                        <SidebarLink to="plans" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Стоимость</SidebarLink>
                        <SidebarLink to="footer" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Контакты</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>   
                    <Button className='primary' to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-80} onClick={toggle}>Получить бесплатно<ArrowRight /></Button>
                </SideBtnWrap>

            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar;