import React from 'react';

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div className="main-content"><p>{ this.props.content }</p></div>)
    }
}