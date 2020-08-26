import React, { Component } from 'react';
import './box.css';

export class Box extends Component {
    render() {
        return (
            <div className="box text-center d-flex flex-column">
                <div className="box-icon">{this.props.boxIcon}</div>
                <h1>{this.props.boxHeading}</h1>
                <p>{this.props.boxValue}</p>
            </div>
        )
    }
}

export default Box
