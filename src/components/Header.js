
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
        let $header = $('#header-main');
        let $hamburger = $('.hamburger');
        let $video = $('#video-top-home');
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

    render() {
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
                        <blockquote>
                            &ldquo;{ getRandomSaying() }&rdquo;
                            <br/>
                            <span>Jasand&apos;s Wife</span>
                        </blockquote>
                    </div>
                </div>
            </header>
        );
    }
    
}