// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import './Main.css';

class SplashPage extends Component {
    render() {
        return (
            <div className="image-background">
                <div className="container">

                    <div id="top-buttons-container">
                        <button id="button-contact" className="btn-type1">Contact Us</button>
                        <button id="button-events" className="btn-type1">View Events</button>
                    </div>

                    <div id="center-container">
                        <p>We are</p>
                        <p>SEC@ <img className="image-TU-logo" src={require("./img/TowsonUlogo.png")} alt="Towson University logo"/></p>
                        <p>Together we build great software</p>
                    </div>

                    <div id="bottom-button-container">
                        <button id="button-learn" className="btn-type2">Learn More</button>
                    </div>

                </div>      
            </div>     
        );
    }
}

export default SplashPage;