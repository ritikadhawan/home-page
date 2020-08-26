import React, { Component } from 'react';
import Box from './Box';
import './boxSection.css'; 

export class BoxSection extends Component {
    
    render() {
        let hand = [<i class="far fa-handshake"></i>]
        return (
            <div className="box-section d-flex flex-wrap">
                <div className="box-s d-flex flex-column flex-sm-row m-0">
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                </div>
                <div className="box-s d-flex flex-column flex-sm-row m-0">
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                </div>
                <div className="box-s d-flex flex-column flex-sm-row m-0">
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                </div>
                <div className="box-s d-flex flex-column flex-sm-row m-0">
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                    <Box
                        boxIcon={hand}
                        boxHeading="150+"
                        boxValue="HubSpot user groups"
                    />
                </div>
                
            </div>
        )
    }
}

export default BoxSection
