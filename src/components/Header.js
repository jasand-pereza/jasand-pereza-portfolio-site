import React from 'react';
import MainNav from './MainNav';
require('waypoints');
require('./../../node_modules/waypoints/lib/shortcuts/sticky.min.js');
require('./../lib/jquery.jrumble.min.js');

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleVideo() {
        
        let $video = $('#video-top');
        if(!$video.length) return;

        let $videoOverlay = $('#video-overlay');
        
        $video[0].playbackRate = 2.0;
        $videoOverlay[0].playbackRate = 2.0;

        let videoPart1Handler = function() {
            if(this.currentTime >= 5.8) {
                $videoOverlay.removeClass('hidden');
                $video.addClass('hidden');
                this.pause(); 
                $videoOverlay[0].play();
                this.removeEventListener('timeupdate', videoPart1Handler);
                return;
            }
        }

        let videoPart2Handler = function() {
            if(this.currentTime >= 0.5) {
                $video.removeClass('hidden');
                $video[0].currentTime = 16;
            }
            if(this.currentTime >= 13) {
                $videoOverlay.addClass('hidden');
                $videoOverlay[0].removeEventListener('timeupdate', videoPart2Handler);
                return;
            }
        }

        $video[0].addEventListener("timeupdate", videoPart1Handler);
        $videoOverlay[0].addEventListener("timeupdate", videoPart2Handler);
    }

    componentDidMount() {
        let $header = $('#header-main');
        let $hamburger = $('.hamburger');
        let $video = $('#video-top');
        
        this.handleVideo();

        var sticky = new Waypoint.Sticky({ 
            element: $header[0], 
            offset: '-200px',
            handler(direction) {
                if(direction === 'up') {
                    $header.addClass('digesting');
                    $header.removeClass('overlay-exposed');
                    $hamburger.removeClass('is-active');
                    $video.removeClass('hidden');
                } else {
                    $video.addClass('hidden');
                    $header.removeClass('digesting');
                }
            }
        });
    }

    render() {
        return (
            <header id="header-main" className={'header-main ' + this.props.styleClasses}>
                <div className="row row-shorter">
                    <div className="medium-9 columns">
                        <h1><img src="/img/logo.png"/></h1>
                    </div>
                    <div className="medium-3 columns">
                        <MainNav currentLocation={this.props.currentLocation}/>
                    </div>
                </div>
            </header>
        );
    }
    
}