'use strict';

// libraries
import React from 'react';

// components
import Button from './../components/Button';

export default class WorkGridContols extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        let filters = data.filters.map((item, i) => {
            let isButtonElement = (typeof item.url !== 'undefined') ? false : true;
            let url = (!isButtonElement) ? item.url : null;
            let target = (!isButtonElement) ? '_blank' : 'null';

            return (
                <li key={i}>
                    <Button otherAttribs={(item.categories !== null) ? { 'data-cat-filter-ids': '0,' + item.categories.join(',') } : null} onClick={this.props.clickHandler} isButtonElement={isButtonElement} url={url} target={target} classNames="btn-yellow-outline ">{ item.name }</Button>
                </li>
            );
        });
        return (
            <ul className="work-grid-controls ut-unlist">
                {filters}
            </ul>
        );
    }
}