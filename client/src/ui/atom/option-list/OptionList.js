import { React } from 'react';
import { Power, PersonPlus, PersonRolodex } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import ServerStatusAlert from '../../../features/service-station/ServerStatusAlert';
import "./Option.css";

const OptionList = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><Power /><Link to="/" style={{ "text-decorarion": "none" }}> Logout</Link></ListGroup.Item>
            <ListGroup.Item><PersonPlus /> <a href="https://accounts.google.com/Logout?hl=vi&timeStmp=1641118512&secTok=.AG5fkS-Ve9gUe2ABTFEEq8k0Jdam9H9Jsg&ec=GAdAAQ">Login Other Account</a></ListGroup.Item>
            <ListGroup.Item><PersonRolodex /> Update Personal Information</ListGroup.Item>
            <ServerStatusAlert />
        </ListGroup>
    );
}
export default OptionList;