// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';

class SplashPage extends Component {
    render() {
        return (
            <div>
                <div id="left-side" className="column">
                    <img className="image-SEC-club" src={require("./img/asset1.png")} alt="SEC meeting"/>
                </div> 
                <div id="right-side" className="column">
                    <div id="top-buttons-container">
                        <NavLink to="/contact"><button id="button-contact" className="btn-type1">Contact Us</button></NavLink>
                        <NavLink to="/events"><button id="button-events" className="btn-type1">View Events</button></NavLink>
                    </div>

                    <div id="center-container">
                        <p className="center-text-bold">We are</p>
                        <div><span className="center-text-bold">SEC@</span> <img className="image-TU-logo" src={require("./img/TowsonUlogo.png")} alt="TU logo"/> </div>
                        <p className="center-text-weak">Together we build great software</p>
                    </div>

                    <div id="bottom-button-container">
                        <NavLink to="/learn"><button id="button-learn" className="btn-type2">Learn More</button></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashPage;