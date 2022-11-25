import React from 'react';
import './styles.css';
function Button({ loading, ...props }) {
    return (
        <button className="button" disabled={loading} {...props}>
            {props.children}
        </button>
    );
}

export default Button;
