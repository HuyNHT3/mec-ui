import React from 'react';
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap'
const Footer = ({ ...rest }) => {
    return (
            <Navbar>
                <Container fluid>
                    <Navbar className="me-auto">
                        <Nav.Link href="#home">About me</Nav.Link>
                        <Nav.Link href="#features">Advertisement</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Navbar>
                </Container>
            </Navbar>
    );
}
export default Footer;