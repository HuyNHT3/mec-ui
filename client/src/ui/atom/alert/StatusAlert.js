import { React } from 'react';
import {
    Alert,
    Button
} from 'react-bootstrap';
const StatusAlert = (props) => {
    const { openCloseAlert, handleCloseAlert,title,status } = props;
    const variant=status===true?"success":"danger";
    return (
        <Alert show={openCloseAlert} variant={variant}>
            <Alert.Heading>How's it going?!</Alert.Heading>
            <p>
                {title}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={() => handleCloseAlert(false)} variant="outline-success">
                    Close me y'all!
                </Button>
            </div>
        </Alert>
    );

}
export default StatusAlert;