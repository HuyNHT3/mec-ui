import { React, useState } from 'react';
import StatusAlert from '../../ui/atom/alert/StatusAlert';
import ListGroup from 'react-bootstrap/ListGroup';
import {CloudCheck} from 'react-bootstrap-icons';
import axios from 'axios';
const ServerStatusAlert = () => {
    const [status, setStatus] = useState(false);
    const [openCloseAlert, setOpenCloseAlert] = useState(false);
    axios.get(`/health`).then((response) => {
        setStatus(true);
    }).catch(() => { setStatus(false) });
    const contentConection = status === true ? "Connection is ok" : "Connection is broken";
    const handleCloseAlert = (closeAlert) => {
        setOpenCloseAlert(closeAlert);
    }
    return (
        <>
            <ListGroup.Item onClick={() => handleCloseAlert(true)}><CloudCheck /> Check server connection</ListGroup.Item>
            <StatusAlert
                openCloseAlert={openCloseAlert}
                handleCloseAlert={handleCloseAlert}
                title={contentConection}
                status={status} />
        </>
    );

}
export default ServerStatusAlert;