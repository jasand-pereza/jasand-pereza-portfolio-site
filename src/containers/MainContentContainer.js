import React from 'react';
import MainContent from './../components/MainContent';

export default class MainContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<MainContent content="the content"/>)
    }
}