import { React } from 'react';
import {
    Alert,
    Button
} from 'react-bootstrap';
const StatusAlert = (props) => {
    const { serverConectionState, handleCloseAlert } = props;
    console.log()
    return (
        <Alert show={serverConectionState.state} variant="success">
            <Alert.Heading>How's it going?!</Alert.Heading>
            <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
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