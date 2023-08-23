import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
	return (
        <Row className="mt-5">
            <Col sm={4} className="d-flex flex-column">
                <h3>Brainstorm</h3>
                <a href="mailto:brainstorm@yandex.ru">brainstorm@yandex.ru</a>
                <a href="tel:+79133600838">+7 (913) 360-08-38</a>
            </Col>
        </Row>
    );
}

export default Footer;