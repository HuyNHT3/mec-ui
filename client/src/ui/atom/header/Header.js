import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header = ({ expand, variant, background, title, style, color, ...rest }) => {
    return (
        <Navbar
            className={style}
            expand={expand}
            variant={variant}
            bg={background}
        >
            <Container fluid>
                <div className={color}>
                    {title}
                </div>
            </Container>
        </Navbar>
    );
}
export default Header;