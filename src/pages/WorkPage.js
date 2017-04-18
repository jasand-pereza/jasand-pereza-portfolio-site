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

    componentWillMount() {
        this.setState({
            dataWorkGrid: Object.assign({}, DataWorkGrid)
        });
    }
    filterClickHandler(e) {
        let $element = $(e.target);
        if($element.text().search(/code/i) > -1) return true;
        e.preventDefault();

        let clickedFilters = $(e.target).data('catFilterIds').split(',');
        this.showWorkWithCatIds(clickedFilters);
    }
    showWorkWithCatIds(catIds) {
        const state = this.state;
        let newState = state;
        let filteredWorkItems = state.dataWorkGrid.work.map((workItem) => {
            let showWorkItem = false;

            workItem.categories.forEach((wCatId) => {
                catIds.forEach((catId) => {
                    catId = parseInt(catId);
                    if(catId == wCatId) {
                        showWorkItem = true;
                        return;
                    }
                });
                if(showWorkItem === true) return;

            });
            workItem.tileShow = showWorkItem;
            return workItem;
        });
        newState.dataWorkGrid.work = filteredWorkItems;
        this.setState(newState);
    }

    render() {
        let currentLocation = this.props.location.pathname;
        return (
            <div className="tmpl-work">
                <Spacer/>
                <Header currentLocation={currentLocation}/>
                <div className="page-wrap">
                    <MainContentContainer page="work">
                         <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <h1 className="htag-yellow">The Craft</h1>
                                <p>Jasand has talked a bunch about how cool he is, but now it&apos;s time for him to live up to it. This is where he exits the room and puts in his ear plugs.</p>
                            </div>
                        </div>
                        <Spacer multiplier={3}/>
                        <div className="row row-shorter">
                            <div className="small-12 medium-9 columns">
                                <WorkGridControls clickHandler={this.filterClickHandler.bind(this)} data={DataWorkGrid}/>
                            </div>
                        </div>
                        <Spacer />
                        <WorkGrid data={this.state.dataWorkGrid} />
                    </MainContentContainer>
                </div>
                <Spacer multiplier={3}/>
                <Slider isSingle={true}></Slider>
                <Footer/>                    
            </div>
        );
    }
};