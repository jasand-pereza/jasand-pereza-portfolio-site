'use strict';

// libraries
import React from 'react';


// components
import DataWorkGrid from './../data/DataWorkGrid';
import WorkPageSingle from './../pages/WorkPageSingle';
// data
import { getItemDetailsBySlug } from './../data/DataMethods';

export default class WorkPageSingleContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let workSlug = this.props.params.workSlug;
        return (
            <WorkPageSingle workItem={getItemDetailsBySlug(DataWorkGrid.work, workSlug)} />
        );
    }
};