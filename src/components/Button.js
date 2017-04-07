import React from 'react';

const Button = ({isButtonElement = false, url='', target="_self", classNames='', children,}) => {
    if(isButtonElement) {
        return (
            <button className={'button ' + classNames}>{children}</button>
        );
    }
    return (<a href={url} className={'button ' + classNames} target={target}>{children}</a>)
    
}

export default Button;