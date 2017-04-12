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
    componentDidMount() {
        let $video = $('#video-top-404');

        let videoPartHandler = function() {
            if(this.currentTime >= 13) {
                $video.addClass('hidden');
                this.removeEventListener('timeupdate', videoPartHandler);
                return;
            }
        }
        $video[0].addEventListener("timeupdate", videoPartHandler);
    }
    render() {
        let currentLocation = this.props.location.pathname;

        return (
            <div className="tmpl-404">
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <video id="video-top-404" className="video-404 " src="/video/laptop-fire.mp4"  autoPlay></video>
                <div className="page-wrap">
                    <MainContentContainer page="home">
                        <div className="row row-shorter">
                            <div className="small-12 medium-7 columns">
                                <h1 className="huge">404</h1>
                                <p className="callout">The content you are looking for is no longer there.</p>
                            </div>
                        </div>
                        <Spacer multiplier={7} />
                    </MainContentContainer>
                </div>
                <Footer/>                    
            </div>
        );
    }
};