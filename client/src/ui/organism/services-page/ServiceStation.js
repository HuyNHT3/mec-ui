import React from 'react';
import Banner from '../../atom/banner/Banner';
import ListOfServices from '../list-of-services/ListOfServices';
import './ServiceStation.css';
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap'
const ServiceStation = ({ ...rest }) => {
    const serviceData = [
        {
            header: "GOOGLE DRIVE",
            image: "GoogleDrive.png"
        },
        {
            header: "Goole Class",
            image: "GoogleClass.png"
        },
        {
            header: "STUDY ENGLISH",
            image: "English.png"
        }
    ];
    const serviceComponentStyle = 
    serviceData.length < 25 ?
    "ServiceStationBodyDefault" : 
    "ServiceStationBody";
    return (
        <div className="ServiceStationBackColor">
            <Banner />
            <div className={serviceComponentStyle}>
                <div className="ServiceContent">
                    <ListOfServices serviceData={serviceData} />
                </div>
            </div>
            <Navbar>
                <Container fluid>
                    <Navbar className="me-auto">
                        <Nav.Link href="#home">About me</Nav.Link>
                        <Nav.Link href="#features">Advertisement</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Navbar>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{ "font-size": "12pt" }}>
                            <b> Contact: </b>Mr.Erik 0983.837.984
                            <b> Zalo: </b>0983.123.6217
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default ServiceStation;