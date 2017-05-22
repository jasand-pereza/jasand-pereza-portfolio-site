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
import WorkGrid from './../components/WorkGrid';
import DataWorkGrid from './../data/DataWorkGrid';
import { Link } from 'react-router';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
         this.setState({
            dataWorkGrid: Object.assign({}, DataWorkGrid)
        });
    }
    componentDidMount() {
        let videoPart1Handler = function() {
            if(this.currentTime >= 11) {
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
   
            <div className="tmpl-home">
  
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                
                <img className="mobile-video-replacement" src="/assets/img/mobile-home.jpg" />
                <video id="video-top-home" className="video-top-home" src="/assets/video/chainsaw.mp4"></video>
                <div className="page-wrap">
                    <MainContentContainer page="home">
                        <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <p className="callout">Legend has it, he was once a graphic designer who transformed himself into a full-stack code wrangler. Today Jasand has been seen building meaningful habitats for users and fellow developers.</p> 
                                <Spacer/>
                                <div className="btn-box">
                                    <Link className="button btn-yellow" to="/about"><span>View The Legend</span></Link>
                                    <Link className="button btn-yellow-outline" to="/work"><span>His Craft</span></Link><br/><br/>
                                    <Link className="button btn-blue" to="https://www.github.com/jasand-pereza" target="_blank"><span>You&apos;re just here to see some code > </span></Link>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <Spacer multiplier={4}/>
                        <WorkGrid data={this.state.dataWorkGrid} number={1} random={true} />
                        <Spacer multiplier={3}/>
                        <div className="row">
                            <div className="small-12" style={{ textAlign: 'center'}}>
                                <p className="callout">Like what you see?</p>
                                <Link className="button btn-yellow" to="/work" ><span>See All Work </span></Link>
                            </div>
                        </div>
                        <Spacer multiplier={3}/>
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