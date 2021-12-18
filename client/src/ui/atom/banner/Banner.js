import { React, useState } from 'react';
import './Banner.css';
import { PersonCircle, Gear } from 'react-bootstrap-icons';
import {
    Navbar,
    Container,
    Button
} from 'react-bootstrap'
import SettingBox from '../setting-box/SettingBox';
const Banner = ({ ...rest }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar className="ServiceStationBanner">
                <Container fluid>
                    <Navbar className="ServiceStationTitle">SERVICE STATION</Navbar>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{ "color": "white", "font-size": "12pt" }}>
                            <PersonCircle color="white" size={30} />
                            <span> N.H.T.Huy </span>
                            <Button onClick={handleShow} variant="danger">
                                <Gear color="white" size={30} />
                            </Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                </Container>
            </Navbar>
            <SettingBox show={show} handleClose={handleClose} />
        </div>
    );
}
export default Banner;