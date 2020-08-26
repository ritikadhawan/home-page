import React, { Component } from 'react';
import './about.css';
import Company from './Company';
import InfoSection from './InfoSection';

export class About extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="inner-section">
                    <Company/>
                    <InfoSection/>
                </div>
            </div>
        )
    }
}

export default About
