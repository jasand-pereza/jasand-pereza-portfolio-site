import React from 'react';

const Spacer = ({multiplier = 1}) => {
    var html = [];
    for(let i=1; i <= parseInt(multiplier); i++) {
        html.push((<div key={i} className="spacer"></div>));
    }
    return (<div>{html}</div>)
}

export default Spacer;