import { React } from 'react';
import { Power, PersonPlus, PersonRolodex } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { GOOGLE_LOGOUT_HREF } from '../../../constants/GoogleConstants';
import { ClearGAUserData } from '../../../utils/storage';
import ListGroup from 'react-bootstrap/ListGroup';
import ServerStatusAlert from '../../../features/service-station/ServerStatusAlert';
import "./Option.css";

const OptionList = () => {
    const handleClearUserInfo = () => {
        ClearGAUserData();
    }
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><Power /><Link to="/"> Home Page</Link></ListGroup.Item>
            <ListGroup.Item><PersonPlus /> <a href={GOOGLE_LOGOUT_HREF} onClick={handleClearUserInfo}>Login Other Account</a></ListGroup.Item>
            <ListGroup.Item><PersonRolodex /> Update Personal Information</ListGroup.Item>
            <ServerStatusAlert />
        </ListGroup>
    );
}
export default OptionList;