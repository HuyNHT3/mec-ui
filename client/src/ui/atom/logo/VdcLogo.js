import React from "react";
import Image from 'react-bootstrap/Image'
import VdcFeatureLogo from '../../../public/images/logo/feature_vdc_logo.png';
import VdcHomeLogo from '../../../public/images/logo/home_vdc_logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const VdcLogo = ({ imagePath, ...rest }) => {
    return (
        <Container>
            <Row >
                <Col xs={12} md={12}>
                    <Image style={{width:'50%'}}src={imagePath === "VdcHomeLogo" ? VdcHomeLogo : VdcFeatureLogo} rounded />
                </Col>
            </Row>
        </Container>
    );
}
export default VdcLogo;