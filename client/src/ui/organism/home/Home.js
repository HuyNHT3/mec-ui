import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';
import ReactTrapButton from '../../atom/react-trap-button/ReactTrapButton';
import {Link} from "react-router-dom";
const Home = ({ ...rest }) => {
    var arg = { label: "Login", style: "HomeLoginButton" };
    return (
        <div>
            <Card className="Homebody">
                <Card.Header className="HomeHeaderFooterColor">
                    Strategies For English Certification Exams
                </Card.Header>
                <Card.Body>
                    <Card.Title className="CardTitleColor">YOU MUST BE LOGGED IN</Card.Title>
                    <Card.Text>
                    <Link to="/Login">
                        <ReactTrapButton {...arg} />
                    </Link>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="HomeHeaderFooterColor" style={{ "text-align": "center" }}>
                    @Copyright: Huy.NguyenHoangThanh - MEC.Software Engineering
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Home;