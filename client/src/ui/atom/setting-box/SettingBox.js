import { React, useState } from 'react';
import OptionList from '../option-list/OptionList';
import StatusAlert from '../alert/StatusAlert';
import {
    Offcanvas,
} from 'react-bootstrap';

const SettingBox = (props) => {
    const { show, handleClose } = props
    const [handleAlert, setHandleAlert] = useState(true);
    const serverConectionState={
        title:'Connect to server successfully',
        state:handleAlert
    }
    const handleCloseAlert=(alertStatus)=>{
        setHandleAlert(alertStatus);
    }
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Setting</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <OptionList />
                <StatusAlert serverConectionState={serverConectionState} handleCloseAlert={handleCloseAlert} />
            </Offcanvas.Body>
        </Offcanvas>
    );
}
export default SettingBox;