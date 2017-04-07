'use strict';

// libraries
import React from 'react';

// components
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';


export default class WorkPageSingle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header styleClasses='ut-bg-black'/>
                <h1>Work Page Single | work item # {this.props.params.workId}</h1>
                <MainContentContainer page="about">
                </MainContentContainer>

                <Footer/>
            </div>
        );
    }
};