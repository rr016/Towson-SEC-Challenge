// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import './Main.css';

class LearnMorePage extends Component {
    render() {
        return (
            <div>
                <img className="image-SEC-club2" src={require("./img/asset2.png")} alt="SEC working"/>
                <div id="container-about">
                    <p id="about-us">ABOUT US</p>
                    <hr/>
                    <p id="about-us-quote">
                        "SEC provides students with opportunities to gain experience, enhance their skills, and explore 
                        new interests related to the software development lifecycle."
                    </p>
                    <p id="about-us-text">
                        The purpose of the Software Engineering Club is to create a social and collaborative community of 
                        students at Towson University who are interested in computer science and software related areas. 
                        We provide members with the resources to help them be successful in school and after graduation. 
                        Consequently, the club maintains relationships with the top software companies in the area in order 
                        to help students make strong connections with recruiters. Finally, to help students gain skills in 
                        the CS field, we provide tutorials on how to use common frameworks, software, and popular APIs. 
                        We hold events throughout the semester such as workshops, hackathons and speaker events. We provide 
                        students with a number of opportunities to gain hands on experience outside the classroom. 
                        Our club helps students of all experience levels develop software skills. 
                        From the student with no programming experience to the advanced developer, speaker series and workshops are open to all.
                    </p>
                </div>
                
            </div>
        );
    }
}

export default LearnMorePage;