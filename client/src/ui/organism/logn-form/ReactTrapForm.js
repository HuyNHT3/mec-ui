import React from 'react';
import Form from 'react-bootstrap/Form';
import ReactTrapButton from '../../atom/react-trap-button/ReactTrapButton';
import Navigator from '../../../features/navigator/Navigator';
import './ReactTrapForm.css';
const ReactTrapForm = ({ ...rest }) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <ReactTrapButton {...{ label: "Login", style: "HomeLoginButton" }} />
            <hr />
            <div className="GoogleButton">
                <Navigator isGoogleAuthenticate={true} />
            </div>
        </Form>
    );
}

export default ReactTrapForm;