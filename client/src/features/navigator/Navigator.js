import React, { useEffect } from "react";
import { GetGAUserData } from "../../utils/storage";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { NAVIGATION_LIST } from "../../constants/NavigationList";
import ServiceStation from "../service-station/ServiceStation";
import GoogleAuthenticate from '../google-authenticate/GoogleAuthenticate'
import ReactTrapButton from "../../ui/atom/react-trap-button/ReactTrapButton";

const Navigator = ({
    isServiceStation,
    isGoogleAuthenticate,
    isHomePage
}) => {
    const navigate = useNavigate();
    const userData = GetGAUserData();

    const GoToServiceStation = () => navigate(NAVIGATION_LIST.SERVICES);
    const GoToAuthentication = () => navigate(NAVIGATION_LIST.AUTHENTICATION);

    useEffect(() => {
        isServiceStation && !userData && GoToAuthentication();
    });

    return <>
        {!!isServiceStation && (<ServiceStation />)}
        {!!isGoogleAuthenticate && (<GoogleAuthenticate GoToServiceStation={GoToServiceStation} />)}
        {!!isHomePage && (
            <Link to={userData ? NAVIGATION_LIST.SERVICES : NAVIGATION_LIST.LOGIN}>
                <ReactTrapButton
                    {...{ label: "Login", style: "HomeLoginButton" }}
                />
            </Link>
        )}
    </>
}
export default Navigator;