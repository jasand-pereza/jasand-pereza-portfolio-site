'use strict';

// libraries
import React from 'react';

// components
import Spacer from './../components/Spacer';
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Button from './../components/Button';
import Header from './../components/Header';
import Slider from './../components/Slider';
import MainContentContainer from './../containers/MainContentContainer';


export default class WorkPageSingle extends React.Component {
    constructor(props) {
        super(props);
    }
    renderWork() {
        if(typeof this.props.workItem.videoSrc != 'undefined') {
            return (
                <div className="row row-shorter">
                    <div className="medium-9 columns">
                        <iframe src={this.props.workItem.videoSrc} style={{ width: '100%', height: '100%', maxHeight: '400px'}} frameBorder="0" allowFullScreen="1"></iframe>
                        <Spacer/>
                    </div>
                </div>
            );
        }
         if(typeof this.props.workItem.isAutoPlayVideo != 'undefined') {
            return (
                <div className="row row-shorter">
                    <div className="medium-9 columns">
                        <video src={'/assets/img/work' + workImage.src} autoplay />
                        <Spacer/>
                    </div>
                </div>
            );
        }
        return this.props.workItem.images.map((workImage, i) => {
            return (
                <div className="row row-shorter" key={i}>
                    <div className="medium-9 columns">
                        {this.renderImgOrAutoPlayVideo(workImage)})
                        <p>{ workImage.caption }</p>
                         <Spacer/>
                    </div>
                </div>
            );
        });
    }
    rewindAndPlay(e) {
        let video = e.target;
        video.currentFrame = 0;
        video.play();
    }
    renderImgOrAutoPlayVideo(workImage) {
        if(typeof workImage.isAutoPlayVideo != 'undefined') {
            return (<video className="video-autoplay" src={'/assets/img/work/' + workImage.src} preload={true} onMouseLeave={(e) => {e.target.pause()}} onClick={this.rewindAndPlay} onMouseOver={this.rewindAndPlay} autoPlay={true} loop={false} muted={true} />);
        } 
        return(<img src={ '/assets/img/work/' + workImage.src } alt={ workImage.title } title={ workImage.title } />);   
    }

    render() {
        return (
            <div>
                <Header styleClasses='ut-bg-black'/>
                <div className="page-wrap">
                    <MainContentContainer page="work-page-single page-content-top">
                        <div className="row row-shorter">
                            <div className="medium-9 columns">
                                <h1 className="htag-yellow" >{ this.props.workItem.title }</h1>
                                <p>{ this.props.workItem.body }</p>
                                {(this.props.workItem.link) ? <Button url={this.props.workItem.link} classNames="button btn-small btn-blue-outline" target="_blank">View it live</Button> : null}
                            </div>
                        </div>
                        <Spacer multiplier={2} />
                        {this.renderWork()}
                    </MainContentContainer>
                </div>
                <Spacer multiplier={3} />
                <Slider isSingle={true}></Slider>
                <Footer/>
            </div>
        );
    }
};