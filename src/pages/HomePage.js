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
            if(this.currentTime >= 20) {
                $('#video-top-home').fadeOut(6000);
                $('#video-top-home')[0].removeEventListener('timeupdate', videoPart1Handler);
                return;
            }
        }
        $('#video-top-home')[0].addEventListener("timeupdate", videoPart1Handler);
        //  $('#video-top-home')[0].currentTime = 8;
        //$('#video-top-home')[0].playbackRate = 0.5;

        
    }
    render() {
        let currentLocation = this.props.location.pathname;

        return (
            <div className="tmpl-home">
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <video id="video-top-home" className="video-top-home" src="/assets/video/chainsaw.mp4"  autoPlay></video>
                {/*<img className="video-top-home" src="/assets/img/fpo-hipster-wood.jpg"/>*/}
                <div className="page-wrap">
                    <MainContentContainer page="home">
                        <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <p className="callout">Legend has it, he was once a graphic designer who transformed himself into a full-stack code wrangler. Today Jasand has been seen building meaningful habitats for users and fellow developers.</p> 
                                <Spacer/>
                                <div className="btn-box">
                                    <Button classNames="btn-yellow" url="/about"><span>View The Legend</span></Button>
                                    <Button classNames="btn-yellow-outline" url="/work"><span>His Craft</span></Button><br/><br/>
                                    <Button classNames="btn-blue" url="https://www.github.com/jasand-pereza" target="_blank"><span>You&apos;re just here to see my code > </span></Button>
                                </div>
                                <br/>
                                <br/>
                                {/*<span className="small-copy">Note: None of the lumberjack looking hipsters on this site are really me. I just aspire to one day look that cool.</span>*/}
                            </div>
                        </div>
                        <Spacer multiplier={4}/>
                        <div className="row">
                            <Slider isSingle={true}></Slider>
                        </div>
                    </MainContentContainer>
                </div>
                <Footer/>                    
            </div>
        );
    }
};