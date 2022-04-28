import { React } from 'react';
import {
    Alert,
    Button
} from 'react-bootstrap';

const StatusAlert = (
    {
        openCloseAlert,
        handleCloseAlert,
        title,
        description,
        hasCloseButton,
        status
    }) => {

    const variant = status === true ? "success" : "danger";

    return (
        <Alert show={openCloseAlert} variant={variant}>
            <Alert.Heading
                data-testid="alertHeading">{title}</Alert.Heading>
            <p data-testid="alertTitle">
                {description}
            </p>
            <div className="d-flex justify-content-end">
                {!!hasCloseButton && (
                    <>
                        <hr />
                        <Button
                            data-testid="alertButton"
                            onClick={() => handleCloseAlert(false)}
                            variant="outline-success">
                            Close
                        </Button>
                    </>
                )}
            </div>
        </Alert>
    );

}
export default StatusAlert;