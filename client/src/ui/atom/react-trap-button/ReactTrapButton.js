import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReactTrapButton.css'
const ReactTrapButton = ({ label,variant,style,...rest }) => {
    return (
        <button
        className={style}
        variant={variant}>
            {label}
        </button>
    );
}
export default ReactTrapButton;