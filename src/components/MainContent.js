import React from 'react';

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="main-content ut-bg-black">
                {this.props.children}
            </div>
        );
    }
}
