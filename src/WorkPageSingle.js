'use strict';

// libraries
import React from 'react';

// components
import Spacer from './../components/Spacer';
import Footer from './../components/Footer';
import MainNav from './../components/MainNav';
import Header from './../components/Header';
import Slider from './../components/Slider';
import MainContentContainer from './../containers/MainContentContainer';


export default class WorkPageSingle extends React.Component {
    constructor(props) {
        super(props);
    }
    renderWork() {
        
        return this.props.workItem.images.map((workImage, i) => {
            return (
                <div className="row row-shorter" key={i}>
                    <div className="medium-9 columns">
                        <img src={ '/img/work/' + workImage.src } alt={ workImage.title } title={ workImage.title } />
                        <p>{ workImage.caption }</p>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="tmpl-work-single">
                <Header styleClasses='ut-bg-black'/>
                <div className="page-wrap">
                    <MainContentContainer page="work-page-single">
                        <div className="row row-shorter page-content-top">
                            <div className="medium-9 columns">
                                <h1 className="htag-yellow" >{ this.props.workItem.title }</h1>
                                <p>{ this.props.workItem.body }</p>
                            </div>
                        </div>
                        <Spacer multiplier={3} />
                        {this.renderWork()}
                    </MainContentContainer>
                </div>
                 <Slider isSingle={true}></Slider>
                <Footer/>
            </div>
        );
    }
};