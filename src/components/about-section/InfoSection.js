import React, { Component } from 'react';
import './infosection.css';

export class InfoSection extends Component {
    render() {
        return (
            <div className="info-section d-flex justify-content-between align-items-center align-items-md-start flex-column-reverse flex-md-row">
                <div className="info d-flex flex-column pt-5 align-items-center align-items-md-start text-center text-md-left">
                    <h2>Start Growing With HubSpot Today</h2>
                    <p>With tools to make every part of your 
                        process more human and a support team 
                        excited to help you, getting started 
                        with inbound has never been easier.
                    </p>
                    <button type="button" className="btn">Get HubSpot Free</button>
                    <small>Get started with FREE tools, or get more with our premium software</small>
                </div>
                <div className="info-image">
                    <img className="w-100 hsg-deferred hsg-deferred-loaded" 
                    data-src="//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/Variation-2@2x.png" 
                    alt="Smiling Person" src="//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/Variation-2@2x.png" 
                    data-was-processed="true"/>
                </div>
            </div>
        )
    }
}

export default InfoSection
