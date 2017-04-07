'use strict';

// libraries
import React from 'react';

// components
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';
import Spacer from './../components/Spacer';
import Slider from './../components/Slider';
import Button from './../components/Button';


export default class NotFound404Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let currentLocation = this.props.location.pathname;

        return (
            <div>
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <video id="video-top-home" className="video-top-home " src="/video/laptop-fire.mp4"  autoPlay></video>
                <div className="page-wrap">
                    <MainContentContainer page="home">
                        <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <h1>404</h1>
                                <p>The content you were looking for was not found.</p>
                            </div>
                        </div>
                    </MainContentContainer>
                </div>
                <Footer/>                    
            </div>
        );
    }
};