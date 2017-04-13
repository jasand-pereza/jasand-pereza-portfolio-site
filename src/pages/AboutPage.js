'use strict';

// libraries
import React from 'react';
import Cookies from 'js-cookie';

// components
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';
import Spacer from './../components/Spacer';
import Button from './../components/Button';
import Slider from './../components/Slider';
import Banner from './../components/Banner';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    handleVideo() {
        let $video = $('#video-top');        
        $video[0].playbackRate = 2.0;
        let overlayVisible = !Cookies.get('hideAboutVideoOverlay');
        let $videoOverlay = null;

        console.log(overlayVisible);
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
                <video id="video-top" className="video-top " src="/assets/video/fpo-axe2.mp4"  autoPlay></video>

                
                { // only show overlay video once unless cookies are cleared
                    (!Cookies.get('hideAboutVideoOverlay'))
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
                                <span className="block-highlight block-highlight-blue ">I had to survive, so I learned  development.</span><br/><br/>
                                <p>I had to survive. That&apos;s why I became a developer. Not because I wanted to. Design was my thing, and I wanted to have a career of branding, packaging and print. Because my job required learning development, I pushed myself to learn. Soon development took over my life, and it became a beautiful obsession. Good thing it was my day job.</p>
                            </div>
                        </div>
                        <Spacer multiplier={5}/>
                        <span className="block-highlight block-highlight-gun-metal block-highlight-jumbo">
                            <div className="row row-shorter collapse">
                                <div className="small-12 columns">
                                    While my experience as a developer grew, so did my tool bet, and that hasn’t stopped. I’m constantly learning new things, so whenever I’m met with a new task, I have a tool and the knowledge to use it.
                                </div>
                            </div>
                        </span>
                        <Spacer/>
                        <div className="row row-shorter">
                            <div className="medium-9 medium-centered columns">
                                <h2 className="callout">Mad Skills</h2>
                                <p>Development is a broad term and you might be wondering what I specialize in. This is not a list of every buzz word but rather a list of things I do very well.</p>
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
                        <div className="row">
                            <Banner image="/assets/img/fpo-photo-tools.jpg" size="large">
                                <p className="text-saying">When Jasand is not developing things, he&apos;s probably in the wood shop (garage) with a cold beer and make&ndash;believing he&apos;s Bob Vila. </p>
                            </Banner>
                        </div>
                        <Spacer/>
                        <div className="row row-shorter">
                            <div className="medium-9 medium-centered columns">
                                <h2 className="callout">My Stack</h2>
                                <p>I am an open source web developer, meaning I do not work with Windows based setups. So for the backbone of most projects, I use Linux, Apache, MySQL and PHP. &#3;I occasionaly dabble and have become more aquainted with the Node.js side of things.</p>
                                <Spacer multiplier={2}/>
                                <div className="row collapse">
                                    <div className="medium-6 columns">
                                        <span className="title-list">99.99% OF THE TIME I USE:</span>
                                        <ul className="list-stack">
                                            <li><span className="block-highlight block-highlight-blue">PHP</span></li>
                                            <li><span className="block-highlight block-highlight-blue">MySQL</span></li>
                                            <li><span className="block-highlight block-highlight-blue">Apache</span></li>
                                            <li><span className="block-highlight block-highlight-blue">LINUX</span></li>
                                        </ul>
                                    </div>
                                     <div className="medium-6 columns">
                                        <span className="title-list">I AM NOW EXPERIMENTING IN:</span>
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
                            <div className="medium-9 medium-centered columns">
                                <h2 className="callout">Evidence – I got rings in my tree trunk to prove it (Absolutley no pun intended)</h2>
                                <p>What good would the latter be if I just spat out a bunch of buzzwords without anything to back it.</p>
                                <br/>
                                <Button classNames="btn-yellow-outline" url="/work">See the work</Button>
                            </div>
                        </div>
                        <Spacer multiplier={3}/>
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