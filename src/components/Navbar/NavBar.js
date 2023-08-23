import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from '../Button';

function NavBar() {
  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#main">Brainstorm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#whywe">Преимущества</Nav.Link>
                <Nav.Link href="#lessons">Виды занятий</Nav.Link>
                <Nav.Link href="#freelesson">Бесплатное занятие</Nav.Link>
                <Nav.Link href="#learn">Зачем учить?</Nav.Link>
                <Nav.Link href="#plans">Наборы</Nav.Link>
                <Nav.Link href="#footer">Контакты</Nav.Link>
            </Nav>
            <Nav>
            <Button className="btn btn-outline-primary" to="contact" smooth={true} duration={1000} spy={true} exact='true' offset={-150}>Записаться</Button>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;