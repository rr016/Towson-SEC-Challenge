// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import './Main.css';

class ContactUsPage extends Component {
    render() {
        return (
            <div>
                <div className="back-image">
                    <form id="form1" className="container" action="/api/confirm" method="POST" >
                        <p className="title">Request Info</p>

                        <div><input type="text" id="firstName" name="firstName" placeholder="First Name" /></div>
                        <div id="require-firstName"></div>

                        <div><input type="text" id="lastName" name="lastName" placeholder="Last Name" /></div>
                        <div id="require-lastName"></div>

                        <div><input type="email" id="email" name="email" placeholder="Email" /></div>
                        <div id="require-email"></div>

                        <div><input type="tel" id="phone" name="phone" placeholder="Phone" /></div>
                        <div id="require-phone"></div>

                        <div><label htmlFor="campus">Which campus are you interested in?</label></div>
                        <div>
                            <select id="campus" name="campus" >
                                <option value="">Please Select...</option>
                                <option value="campusA">Campus A</option>
                                <option value="campusB">Campus B</option>
                                <option value="campusC">Campus C</option>
                            </select>
                        </div>
                        <div id="require-campus"></div>

                        <div><label htmlFor="workshop">Which workshop would you like to learn more about?</label></div>
                        <div><textarea id="workshop" name="workshop"></textarea></div>

                        <p id="privacy">By submitting your information below, you agree to our <span className="gold-text">Terms of Use</span> and <span className="gold-text">Privacy Policy</span>.</p>
                        <div className="btn-container"><button type="submit" className="btn">Request Info</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUsPage;