'use strict';

// libraries
import React from 'react';
import Cookies from 'js-cookie';

// components
import { Link } from 'react-router';
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';
import Spacer from './../components/Spacer';
import Slider from './../components/Slider';
import Banner from './../components/Banner';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    handleVideo() {
        let $video = $('#video-top');  
        $video[0].playbackRate = 2.0;
        let overlayVisible = false; //!Cookies.get('hideAboutVideoOverlay');
        let $videoOverlay = null;

        if(overlayVisible) { 
            $videoOverlay = $('#video-overlay');
            $videoOverlay[0].playbackRate = 1.5;
        }
       
        let videoPart1Handler = function() {
            if(this.currentTime >= 5.8 && overlayVisible) {
                $videoOverlay.removeClass('hidden');
                $video.addClass('hidden');
                $video[0].pause(); 
                $videoOverlay[0].play();
                this.removeEventListener('timeupdate', videoPart1Handler);
                return;
            } else if(this.currentTime >= 17) {
                $video.addClass('hidden');
            }
        }
        let videoPart2Handler = function() {
            if(this.currentTime >= 0.5) {
                $video.removeClass('hidden');
                $video[0].currentTime = 16;
            }
            if(this.currentTime >= 7) {
                $videoOverlay.addClass('hidden');
            }
            if(this.currentTime >= 12) {
                $videoOverlay.remove();
                $video.addClass('hidden');
                $videoOverlay[0].removeEventListener('timeupdate', videoPart2Handler);
                return;
            }
            Cookies.set('hideAboutVideoOverlay', true, { expires: 7, path: '' });
        }
        $video[0].addEventListener("timeupdate", videoPart1Handler);
        
        if(overlayVisible) { 
            $videoOverlay[0].addEventListener("timeupdate", videoPart2Handler);
        }
        
    }
    componentDidMount() {
        this.handleVideo();
    }
    render() {
        let currentLocation = this.props.location.pathname;

        return (
            <div className="tmpl-about">
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <img className="mobile-video-replacement" src="/assets/img/mobile-about.jpg" />
                <video id="video-top" className="video-top " src="/assets/video/axe-man.mp4"></video>

                
                { // only show overlay video once unless cookies are cleared
                    (false) //!Cookies.get('hideAboutVideoOverlay')
                ?
                    <video id="video-overlay" className="video-overlay hidden" src="/assets/video/wood-flying-grayscale.mp4"></video>
                :
                    null
                }
                
                <div className="page-wrap">
                    <MainContentContainer page="about">
                        <div className="row row-shorter page-content-top" id="page-top-content">
                            <div className="small-12 medium-9 columns">
                                <h1 className="htag-yellow">The Man and his axe</h1>
                                <span className="block-highlight block-highlight-blue ">He had to survive, so he learned development.</span><br/><br/>
                                <p>Jasand had to survive. That&apos;s why he became a developer. Design was originally his thing, and he wanted to have a career of branding, packaging and print. Because his job required learning development, he pushed himself to learn. Soon development took over his life, and it became a beautiful obsession. Good thing it was his day job.</p>
                            </div>
                        </div>
                        <Spacer multiplier={5}/>
                        <span className="block-highlight block-highlight-gun-metal block-highlight-jumbo">
                            <div className="row row-shorter collapse">
                                <div className="small-12 columns">
                                    While his experience as a developer grew, so did his tool belt, and that hasn’t stopped. Jasand is constantly learning new things. So whenever he is met with a new task, there is a tool and the knowledge to use it.
                                </div>
                            </div>
                        </span>
                        <div className="ut-stage-lighting">
                            <Spacer/>
                            <div className="row row-shorter">
                                <div className="medium-9 medium-centered columns">
                                    <h2 className="callout">Mad Skills</h2>
                                    <p>Development is a broad term and you might be wondering what he specializes in. This is not a list of every buzz word but rather a list of things he does very well.</p>
                                    <div className="row collapse body-copy">
                                        <div className="medium-6 columns">
                                            <ul>
                                                <li>Interactive maps</li>
                                                <li>Laravel apps</li>
                                                <li>Data visualization (D3.js)</li>
                                                <li>React and Vue</li>
                                                <li>Website animation</li>
                                                <li>API integrations</li>
                                            </ul>
                                        </div>
                                        <div className="medium-6 columns">
                                            <ul>
                                                <li>Composer packages</li>
                                                <li>WordPress plugins</li>
                                                <li>Linux server setup and security</li>
                                                <li>Custom websites</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <Spacer multiplier={2}/>
                        </div>
                        <div className="row">
                            <Banner image="/assets/img/tools.jpg" size="large">
                                <p className="text-saying">When Jasand is not developing things, he&apos;s probably in the wood shop (garage) with a cold beer and make&ndash;believing he&apos;s Bob Vila. </p>
                            </Banner>
                        </div>
                        <div className="ut-stage-lighting">
                            <Spacer/>
                            <div className="row row-shorter">
                                <div className="medium-9 medium-centered columns ut-more-mobile-centered-width">
                                    <h2 className="callout">His Stack</h2>
                                    <p>Jasand is an open source web developer, meaning he does not work with Windows based setups. So for the backbone of most projects, he uses Linux, Apache, MySQL and PHP. &#3;He occasionaly dabbles and has become more aquainted with the Node.js side of things.</p>
                                    <Spacer multiplier={2}/>
                                    <div className="row collapse">
                                        <div className="medium-6 columns">
                                            <span className="title-list">99.99% OF THE TIME HE USES:</span>
                                            <ul className="list-stack">
                                                <li><span className="block-highlight block-highlight-blue">PHP</span></li>
                                                <li><span className="block-highlight block-highlight-blue">MySQL</span></li>
                                                <li><span className="block-highlight block-highlight-blue">Apache</span></li>
                                                <li><span className="block-highlight block-highlight-blue">LINUX</span></li>
                                            </ul>
                                        </div>
                                        <div className="medium-6 columns">
                                            <span className="title-list">HE IS NOW EXPERIMENTING IN:</span>
                                            <ul className="list-stack-gray">
                                                <li><span className="block-highlight block-highlight-blue">Node.js</span></li>
                                                <li><span className="block-highlight block-highlight-blue">JS Framework</span></li>
                                                <li><span className="block-highlight block-highlight-blue">Express</span></li>
                                                <li><span className="block-highlight block-highlight-blue">Mongo</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Spacer/>
                            <div className="row row-shorter">
                                <div className="medium-9 medium-centered columns ut-more-mobile-centered-width">
                                    <h2 className="callout">Evidence</h2>
                                    <p>What good would the latter be if he just spat out a bunch of buzzwords without anything to back it.</p>
                                    <br/>
                                    <Link className="button btn-yellow-outline" to="/work">See the work</Link>
                                </div>
                            </div>
                            <Spacer multiplier={3}/>
                        </div>
                    </MainContentContainer>
                </div>
                <div className="row">
                    <Slider isSingle={true}></Slider>
                </div>
                <Footer/>                    
            </div>
        );
    }
};