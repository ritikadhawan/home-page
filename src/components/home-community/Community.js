import React, { Component } from 'react';
import './community.css';
import Heading from './Heading';
import BoxSection from './BoxSection';

export class Community extends Component {
    render() {
        return (
            <div className="community-section">
                <div className="inner-section">
                    <Heading/>
                    <BoxSection/>
                </div>
            </div>
        )
    }
}

export default Community
