import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTrapButton from '../../atom/react-trap-button/ReactTrapButton';

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
        </Form>
    );
}

export default ReactTrapForm;