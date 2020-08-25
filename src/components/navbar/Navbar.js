import React, { Component } from 'react';
import './navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light pr-md-5 pl-md-5 fixed-top">
                    <a className="navbar-brand ml-sm-5 ml-4" href="#">
                        <img className="w-100 h-100" src="./hubspot1.svg"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-md-auto text-center">
                            <li className="nav-item active ml-md-4">
                                <a className="nav-link" href="#">Software</a>
                            </li>
                            <li className="nav-item active ml-md-4">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item active ml-md-4">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item active ml-md-4">
                                <a className="nav-link" href="#">Partners</a>
                            </li>
                            <li className="nav-item active ml-md-4">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
