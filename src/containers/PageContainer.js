import React from 'react';
import PageTransition from 'react-router-page-transition';


export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    getTransition() {
        const transitions = [
            'above',
            'above-dark',
            'above-blue',
            'left-blue'
        ];
        return transitions[Math.floor(Math.random() * transitions.length)];
    }
    onTransitionWillStart(data) {
        if($('video').length) {
            $('video').each(function(){
                $(this)[0].pause();
            });
        }
        $('.trans-top').addClass('present');   
    }
    onTransitionDidEnd(data) {
        if($('video').length) {
            $('video').each(function(){
                $(this)[0].play();
            });
        }
        $('.trans-top').removeClass('present');
    }
    render() {
        return(
            <div className={'page transition-item trans-' + this.getTransition() }>
                <div className="trans-top"></div>
                 {this.props.children}
            </div>
        );
    }
}