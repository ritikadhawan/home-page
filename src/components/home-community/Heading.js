import React, { Component } from 'react';
import './heading.css';

export class Heading extends Component {
    render() {
        return (
            <div className="comm-heading text-center">
                <h2>Learn and grow with award-winning support and a thriving community behind you.</h2>
                <h5>
                    You don't have to go it alone. Master the inbound methodology and get the most out 
                    of your tools with HubSpot's legendary customer support team and a community of 
                    thousands of marketing and sales pros just like you.
                </h5>
            </div>
        )
    }
}

export default Heading
