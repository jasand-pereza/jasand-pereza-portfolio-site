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

        $('.btn-yellow').addClass('fake-active');
        setTimeout(() => {
             $('.btn-blue').addClass('fake-active');

             setTimeout(() => {
                 $('.btn-yellow').removeClass('fake-active');

                 setTimeout(() => {
                    $('.btn-blue').removeClass('fake-active');
                 }, 600);
             }, 600);
        }, 600);
       
    }
    render() {
        return(
            <div className="page transition-item">
                <div className={'trans-top trans-'  + this.getTransition()}></div>
                 {this.props.children}
            </div>
        );
    }
}