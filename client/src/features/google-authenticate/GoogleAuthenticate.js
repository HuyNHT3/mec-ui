import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../constants/GoogleConstants'
import { SaveUserData } from './../../utils/storage';
const GoogleAuthenticate = ({ GoToServiceStation }) => {
    const clientId = GOOGLE_CLIENT_ID;
    const responseGoogle = (response) => {
        SaveUserData(response);
        !response.error && GoToServiceStation();
    }
    return (
        <div className="GoogleButton">
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