import { React } from 'react';
import OptionList from '../option-list/OptionList';
import {
    Offcanvas,
} from 'react-bootstrap';

const SettingBox = (props) => {
    const { show, handleClose } = props
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Setting</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <OptionList />
            </Offcanvas.Body>
        </Offcanvas>
    );
}
export default SettingBox;