'use strict';

// libraries
import React from 'react';

// components
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import MainContentContainer from './../containers/MainContentContainer';
import WorkGrid from './../components/WorkGrid';
import Spacer from './../components/Spacer';
import Slider from './../components/Slider';
import Button from './../components/Button';
import DataWorkGrid from './../data/DataWorkGrid';
import WorkGridControls from './../components/WorkGridControls';

export default class WorkPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let currentLocation = this.props.location.pathname;
        return (
            <div>
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <div className="page-wrap">
                    <MainContentContainer page="work">
                         <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <h1 className="htag-yellow">The Craft</h1>
                                <p>I&apos;ve talked a bunch about how cool I am, but now it&apos;s time to live up to it. This is where I exit the room and put my ear plugs in.</p>
                            </div>
                        </div>
                        <Spacer multiplier={3}/>
                        <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <WorkGridControls data={DataWorkGrid}/>
                            </div>
                        </div>
                        <Spacer />
                        <WorkGrid data={DataWorkGrid} />
                    </MainContentContainer>
                </div>
                <Spacer multiplier={3}/>
                <Slider></Slider>
                <Footer/>                    
            </div>
        );
    }
};