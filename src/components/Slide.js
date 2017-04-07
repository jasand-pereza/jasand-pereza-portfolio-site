'use strict';

// libraries
import React from 'react';


export default class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="slide" style={{ backgroundImage: 'url(' + this.props.image +')'  }}>
               {this.props.children}
            </li>
        );
    }
};