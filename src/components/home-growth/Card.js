import React, { Component } from 'react';
import './card.css';

export class Card extends Component {
    render() {
        return (
            <div className="cards d-flex flex-column justify-content-center align-items-center">
                <div className="heading d-flex w-100">
                    <i class="far fa-star"></i>
                    <h5>{this.props.heading}</h5>
                </div>
                <div className="about">
                    {this.props.about}
                </div>
                
                <div className="features w-100">
                    <p className="f-heading">POPULAR FEATURES</p>
                    <div className="d-flex item">
                        <i class="fas fa-check-circle"></i>
                        <p>{this.props.item1}</p>
                    </div>
                    <div className="d-flex item">
                        <i class="fas fa-check-circle"></i>
                        <p>{this.props.item2}</p>
                    </div>
                    <div className="d-flex item">
                        <i class="fas fa-check-circle"></i>
                        <p>{this.props.item3}</p>
                    </div>
                </div>
                <button type="button" className="btn">Get Started</button>
            </div>
        )
    }
}

export default Card
