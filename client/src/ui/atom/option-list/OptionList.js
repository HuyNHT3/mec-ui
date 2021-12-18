import { React } from 'react';
import { Power, PersonPlus, PersonRolodex } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Option.css";

const OptionList = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><Power /><Link to="/" style={{ "text-decorarion": "none" }}> Logout </Link></ListGroup.Item>
            <ListGroup.Item><PersonPlus /> Login</ListGroup.Item>
            <ListGroup.Item><PersonRolodex /> Update Personal Information</ListGroup.Item>
        </ListGroup>
    );
}
export default OptionList;