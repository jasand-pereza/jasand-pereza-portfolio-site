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


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let videoPart1Handler = function() {
            if(this.currentTime >= 5) {
                $('#video-top-home').fadeOut(6000);
                $('#video-top-home')[0].removeEventListener('timeupdate', videoPart1Handler);
                return;
            }
        }
        $('#video-top-home')[0].addEventListener("timeupdate", videoPart1Handler);
    }
    render() {
        let currentLocation = this.props.location.pathname;

        return (
            <div>
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <video id="video-top-home" className="video-top-home" src="/video/workshop-injury.mp4"  autoPlay></video>
                <div className="page-wrap">
                    <MainContentContainer page="home">
                        <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <p className="callout">Once a graphic designer, now a full-stack code wrangler, I’m obsessed with making the web a meaningful habitat for the user and fellow developers.</p> 
                                <Spacer/>
                                <div className="btn-box">
                                    <Button classNames="btn-yellow" url="#"><span>View The Legend</span></Button>
                                    <Button classNames="btn-yellow-outline" url="#"><span>See Craft</span></Button><br/><br/>
                                    <Button classNames="btn-blue" url="#"><span>You&apos;re just here to see my code > </span></Button>
                                </div>
                                <br/>
                                <br/>
                                {/*<span className="small-copy">Note: None of the lumberjack looking hipsters on this site are really me. I just aspire to one day look that cool.</span>*/}
                            </div>
                        </div>
                        <Spacer multiplier={4}/>
                        <div className="row">
                            <Slider></Slider>
                        </div>
                    </MainContentContainer>
                </div>
                <Footer/>                    
            </div>
        );
    }
};