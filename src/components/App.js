import React from 'react';
import PageTransition from 'react-router-page-transition';
import Page from './../containers/PageContainer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <PageTransition timeout={1200} >
                    <Page>
                        {this.props.children}
                    </Page>
               </PageTransition>
            </div>
        );
    }
}