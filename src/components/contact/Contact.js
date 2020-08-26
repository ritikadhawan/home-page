import React, { Component } from 'react';
import './contact.css';

export class Contact extends Component {
    render() {
        return (
            <div className="contact-section">
                <div className="inner-section">
                    <div className="upper-contact">
                        <ul className="contact-list d-flex justify-content-center w-100">
                            <li>
                                <i class="fab fa-facebook-f"></i>
                            </li>
                            <li>
                                <i class="fab fa-instagram"></i>
                            </li>
                            <li>
                                <i class="fab fa-youtube"></i>
                            </li>
                            <li>
                                <i class="fab fa-twitter"></i>
                            </li>
                            <li>
                                <i class="fab fa-linkedin-in"></i>
                            </li>
                            <li>
                                <i class="far fa-envelope"></i>
                            </li>
                        </ul>
                        <ul className="contact-list d-flex justify-content-center w-100">
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                        </ul>
                    </div>
                    <div className="mt-4 d-flex flex-column flex-md-row justify-content-md-between align-items-center align-items-md-start">
                        <div className="copyright d-flex flex-column align-items-center">
                            <img className="pb-3 hsg-deferred hsg-deferred-loaded" 
                            data-src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg" 
                            alt="HubSpot Logo" src="https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_gray.svg" 
                            data-was-processed="true"/>
                            <p>Copyright © 2020 HubSpot, Inc.</p>
                        </div>
                        <div className="legal-section d-flex">
                            <p className="p-2">Legal Stuff</p>
                            <p className="p-2">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
