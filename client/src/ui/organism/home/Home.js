import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';
const Home = ({ ...rest }) => {
    var arg = {
        expand: "lg",
        variant: "light",
        bg: "dark",
        style: "HomeHeader",
        color: "Branch",
        title: "Strategies For English Certification Exams"
    }
    return (
        <div>
            <Card className="Homebody">
                <Card.Header className="HomeHeaderFooterColor">
                    Strategies For English Certification Exams
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        <div>
                            With supporting text below as a natural lead-in to additional content.
                        </div>
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