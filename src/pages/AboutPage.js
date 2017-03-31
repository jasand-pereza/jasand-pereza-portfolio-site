'use strict';

// libraries
import React from 'react';

// components
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';


export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <h1>About Page</h1>
                <MainContentContainer page="about">
                </MainContentContainer>

                <Footer/>
            </div>
        );
    }
};