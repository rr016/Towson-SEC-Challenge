// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import './Main.css';

class SplashPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="back-image">
                    <p id="test">Hello World!</p>
                </div>      
            </div>     
        );
    }
}

export default SplashPage;