import { React } from 'react';
import { Power, PersonPlus, PersonRolodex } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup'

const OptionList = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><Power /> Logout</ListGroup.Item>
            <ListGroup.Item><PersonPlus /> Login</ListGroup.Item>
            <ListGroup.Item><PersonRolodex /> Update Personal Information</ListGroup.Item>
        </ListGroup>
    );
}
export default OptionList;