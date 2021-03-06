'use strict';

// libraries
import React from 'react';

// components
import Button from './Button';
import Slide from './Slide';
import { getRandomSaying } from './../data/DataMethods';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    getSaying() {
        if(typeof __PRELOADED_STATE__ != 'undefined') {
            return __PRELOADED_STATE__.sayings.footerSaying;
        } else {
            return getRandomSaying();
        }
    }
    render() {
        return (
            <div className="slider">
                <ul className="ut-unlist slider-slides">
                    <Slide image="/assets/img/hipster.jpg">
                        <p className="text-saying">&ldquo;{ this.getSaying() }&rdquo;</p>
                    </Slide>
                </ul>
                {
                (!this.props.isSingle)
                ?
                 <div className="controls-slider-wrapper">
                    <ul className="controls-slider ut-unlist">
                        <li><button></button></li>
                        <li><button></button></li>
                        <li><button></button></li>
                        <li><button></button></li>
                    </ul>
                </div>
                : null }
            </div>
        );
    }
};