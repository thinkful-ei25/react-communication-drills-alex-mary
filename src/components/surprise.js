import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            surprise: false
        };
    }

    setSurprise(surprise) {
        this.setState({
            surprise
        });
    }

    render() {
        if (!this.state.surprise){
            return <SurpriseButton setSurprise={() => this.setSurprise(true)} />
        }

        return <SurpriseImage/>;
    }
}
