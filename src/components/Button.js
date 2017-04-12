import React from 'react';

const Button = ({isButtonElement = false, url='', target="_self", classNames='', children, onClick=null, otherAttribs=null }) => {
    if(isButtonElement) {
        return (
            <button onClick={onClick} className={'button ' + classNames} {...otherAttribs} >{children}</button>
        );
    }
    return (<a href={url} onClick={onClick} className={'button ' + classNames} target={target}>{children}</a>)
    
}

export default Button;