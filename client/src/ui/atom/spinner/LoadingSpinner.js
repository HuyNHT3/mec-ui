import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './Spinner.css';
function LoadingSpinner({ animation, ...rest }) {
  return (
    <>
      <div className="SpinnerColor">
        Loading The System
        <div>
          <Spinner animation={animation} variant="success" />
          <Spinner animation={animation} variant="danger" />
          <Spinner animation={animation} variant="warning" />
          <Spinner animation={animation} variant="info" />
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;
