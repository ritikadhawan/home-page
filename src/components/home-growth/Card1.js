import React, { Component } from 'react';
import './card1.css';

export class Card1 extends Component {
    render() {
        return (
            <div className="card1 d-flex flex-column">
                <h2>Powerful alone. Better together.</h2>
                <p>HubSpot offers a full stack of software
                    for marketing, sales, and customer 
                    service, with a completely free CRM at 
                    its core. They’re powerful alone — but 
                    even better when used together.</p>
            </div>
        )
    }
}

export default Card1
