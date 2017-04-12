'use strict';

// libraries
import React from 'react';

// components
import Spacer from './../components/Spacer';
import Button from './../components/Button';
import { getCatsByIds } from './../data/DataMethods';

export default class WorkGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        let data = this.props.data;
        let items = data.work.map((item, i) => {
            if(item.tileShow === false) return null;

            if(typeof item.publish == 'undefined' && item.publish !== true) return;

            let isDarkClassString = '';
            if(typeof item.isThumbDark != 'undefined') {
                if(item.isThumbDark == true) {
                    isDarkClassString = 'is-dark';
                }
            }
            return (
                <div key={i} className={'column column-block work-grid-item ' + isDarkClassString } style={{ backgroundImage: 'url(' + '/img/work/' + item.thumbSrc +')'}}>
                   <img src={'/img/work/' + item.thumbSrc}/>
                    <a className="work-item-details" href={'/work/' + item.slug}>
                        <h1>{item.title}</h1>
                        <strong className="work-item-categories">{ getCatsByIds(data, item.categories) } </strong>
                        <span className="click-indicator">view ></span>
                    </a>
                </div>
            );
        });
        return(
            <div className="work-grid collapse row small-up-2 medium-up-4">
                {items}
            </div>
        );
    }
}


                        