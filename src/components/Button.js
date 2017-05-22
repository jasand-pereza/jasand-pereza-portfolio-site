import React from 'react';
import { Link } from 'react-router';

const Button = ({isButtonElement = false, url='', target="_self", classNames='', children, onClick=null, otherAttribs=null }) => {
    if(isButtonElement) {
        return (
            <button onClick={onClick} className={'button ' + classNames} {...otherAttribs} >{children}</button>
        );
    }
    return (
        <Link onClick={onClick} target={target} className={'button ' + classNames} to={url}>{children}</Link>
    );
    
}

export default Button;