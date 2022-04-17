import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../constants/GoogleConstants'
import { useNavigate } from 'react-router-dom';
const GoogleAuthenticate = () => {
    const clientId = GOOGLE_CLIENT_ID;
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        !response.error && navigate('/Services');
    }
    return (
        <div className="GoogleButton">
            {console.log(responseGoogle)}
            <GoogleLogin
                clientId={clientId}
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default GoogleAuthenticate;