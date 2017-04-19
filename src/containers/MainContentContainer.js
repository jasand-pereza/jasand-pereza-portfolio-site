import React from 'react';
import MainContent from './../components/MainContent';

export default class MainContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <MainContent>
                    {this.props.children}
                </MainContent>
            </div>
        )
    }
}