import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTrapForm from '../logn-form/ReactTrapForm';
import VdcLogo from '../../atom/logo/VdcLogo'
import './Login.css'
const Login = () => {
    return (
        <Card className="box-shadow">
            <Card.Body>
                <Card.Title>
                    <VdcLogo className="logo" imagePath="VdcHomeLogo" />
                </Card.Title>
                <Card.Text>
                    <ReactTrapForm />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Login;