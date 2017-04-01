'use strict';

// libraries
import React from 'react';

// components
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';


export default class NotFound404Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <h1>404</h1>
                <MainContentContainer page="page404">
                    The content you were looking for was not found.
                </MainContentContainer>
                <Footer/>
            </div>
        );
    }
};