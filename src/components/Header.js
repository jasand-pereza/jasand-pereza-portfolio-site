
// libs
if(typeof window != 'undefined') {
    require('./../../node_modules/waypoints/lib/jquery.waypoints.min.js');
    require('./../../node_modules/waypoints/lib/shortcuts/sticky.min.js');
}

// local libs
import { getRandomSaying } from './../data/DataMethods';
import React from 'react';

// components
import MainNav from './MainNav';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // check if random saying already exists
        if(!$(this.bElement).find('span').length) {
            $(this.bElement).append(this.getRandomSaying());
        }

        let $header = $('#header-main');
        let $hamburger = $('.hamburger');
        let $video = $('#video-top-home, #video-top');
        let sticky = null;    
        
        let initSticky = () => {
            sticky = new Waypoint.Sticky({ 
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

        let checkSticky = () => {
            if($(window).width() >= 800) {
                if(sticky === null) {
                    initSticky();
                }
            }  else if($(window).width() <= 799) {
                if(sticky !== null) {
                    sticky.destroy();
                }
                sticky = null;
            }
        }
        checkSticky();
        $(window).resize(checkSticky);
        
    }

    getHeaderSaying() {
        if(typeof __PRELOADED_STATE__ != 'undefined') {
            return __PRELOADED_STATE__.sayings.headerSaying;
        } else {
            return getRandomSaying();
        }
    }

    render() {
        let saying = null;
        if(typeof window == 'undefined') {
            saying = getRandomSaying();
        }
        return (
            <header id="header-main" className={'header-main ' + this.props.styleClasses}>
                <div className="row row-shorter">
                    <div className="medium-9 columns">
                        <h1><img src="/assets/img/logo.png"/></h1>
                    </div>
                    <div className="medium-3 columns">
                        <MainNav currentLocation={this.props.currentLocation}/>
                    </div>
                </div>
                <div className="row row-shorter">
                    <div className="small-12 columns header-random-saying">
                        <blockquote ref={(bElement) => { this.bElement = bElement } }>
                            &ldquo;{ this.getHeaderSaying() }&rdquo;
                            <br/>
                            <span>Jasand&apos;s Wife</span>
                        </blockquote>
                    </div>
                </div>
            </header>
        );
    }
    
}