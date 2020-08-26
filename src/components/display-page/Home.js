import React, { Component } from 'react';
import './home.css';
import BackImage from './BackImage';

export class Home extends Component {
    render() {
        return (
            <div id="display-section" className="back-color">
                <div className="back-image">
                    <div className="home-text d-flex flex-column">
                        <h1>There’s a better way to grow.</h1>
                        <p className="mt-2">
                            Marketing, sales, and service 
                            software that helps your business 
                            grow without compromise. Because 
                            “good for the business” should 
                            also mean “good for the customer.”
                        </p>
                        <button type="button" className="btn">Get HubSpot Free</button>
                        <small className="mt-4">Get started with FREE tools, and upgrade as you grow.</small>
                    </div>
                </div>
                <BackImage/>
            </div>
        )
    }
}

export default Home
