import React from 'react';
import '../Wrapper/Wrapper.css';

const Wrapper = (props) => {
    return (
        <div>{props.children}</div>
    );
};

export default Wrapper;