import React from 'react';
import Card from 'react-bootstrap/Card';
import Navigator from '../../../features/navigator/Navigator';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Card className="Homebody">
                <Card.Header className="HomeHeaderFooterColor">
                    Strategies For English Certification Exams
                </Card.Header>
                <Card.Body>
                    <Card.Title className="CardTitleColor">YOU MUST BE LOGGED IN</Card.Title>
                    <Card.Text>
                        <Navigator isHomePage={true} />
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