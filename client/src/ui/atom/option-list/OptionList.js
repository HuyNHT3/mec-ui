import { React,useState } from 'react';
import { Power, PersonPlus, PersonRolodex, CloudCheck } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Option.css";

const OptionList = () => {
    const [serverHealthCheckData,setServerHealthCheckData]=useState({});
    const handleServerCheck = () => {
        axios.get(`/health`).then((response)=>{
            setServerHealthCheckData(response);
          }).catch(()=>{setServerHealthCheckData({status:"500"})});
          console.log(serverHealthCheckData);
    }
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><Power /><Link to="/" style={{ "text-decorarion": "none" }}> Logout </Link></ListGroup.Item>
            <ListGroup.Item><PersonPlus /> Login</ListGroup.Item>
            <ListGroup.Item><PersonRolodex /> Update Personal Information</ListGroup.Item>
            <ListGroup.Item onClick={() => handleServerCheck()}><CloudCheck /> Check server connection</ListGroup.Item>
        </ListGroup>
    );
}
export default OptionList;