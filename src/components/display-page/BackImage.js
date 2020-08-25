import React, { Component } from 'react';
import './home.css';

export class BackImage extends Component {
    render() {
        let width = window.innerWidth;
        // let w = window.matchMedia("all and (max-width: 720px)");
        let imageUrl = "https://www.hubspot.com/hubfs/raw_assets/public/_Web%20Team%20Assets/Website/assets/svg/hero.svg"; //: "https://www.hubspot.com/hubfs/53/assets/hubspot.com/home/2019/garage.svg";
        return(
            <div className="image-section">
                <img src={imageUrl}/>
            </div>
        )
        
        
    }
}

export default BackImage
