import React from 'react';
import Form from 'react-bootstrap/Form';
import ReactTrapButton from '../../atom/react-trap-button/ReactTrapButton';
import { GoogleLogin } from 'react-google-login';
import './ReactTrapForm.css';
const ReactTrapForm = ({ ...rest }) => {
    const clientId = "283076070078-clm2l26cldbit1gl8fq77b3jtr1qne54.apps.googleusercontent.com";
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <ReactTrapButton {...{ label: "Login", style: "HomeLoginButton" }} />
            <hr/>
            <div className="GoogleButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
        </Form>
    );
}

export default ReactTrapForm;