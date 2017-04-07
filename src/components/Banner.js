'use strict';

// libraries
import React from 'react';


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ 'banner-container ' + ((this.props.size) ? this.props.size : '') }>
                <div className="banner" style={{ backgroundImage: 'url(' + this.props.image +')'  }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
};