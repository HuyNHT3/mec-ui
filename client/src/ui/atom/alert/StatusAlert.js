import { React } from 'react';
import {
    Alert,
    Button
} from 'react-bootstrap';

const StatusAlert = ({ openCloseAlert, handleCloseAlert, title, status }) => {

    const variant = status === true ? "success" : "danger";

    return (
        <Alert show={openCloseAlert} variant={variant}>
            <Alert.Heading 
                data-testid="alertHeading">How's it going?!</Alert.Heading>
            <p data-testid="alertTitle">
                {title}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button
                    data-testid="alertButton"
                    onClick={() => handleCloseAlert(false)}
                    variant="outline-success">
                    Close me y'all!
                </Button>
            </div>
        </Alert>
    );

}
export default StatusAlert;