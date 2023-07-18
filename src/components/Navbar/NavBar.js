import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function NavBar() {
  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#main">Brainstorm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#main">Главная</Nav.Link>
                <Nav.Link href="#whywe">Преимущества</Nav.Link>
                <Nav.Link href="#">Виды занятий</Nav.Link>
                <Nav.Link href="#">Бесплатное занятие</Nav.Link>
                <Nav.Link href="#">Зачем учить?</Nav.Link>
                <Nav.Link href="#">Стоимость</Nav.Link>
                <Nav.Link href="#">Контакты</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="outline-primary">Записаться</Button>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;