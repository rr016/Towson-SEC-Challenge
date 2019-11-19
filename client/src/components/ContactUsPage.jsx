// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import './Main.css';

class ContactUsPage extends Component {
    render() {
        return (
            <div className="form-container">
                <div className="form-header">
                    <p id="text-contact-us">Contact Us</p>
                </div>

                <form id="contact-form" action="/api/confirm" method="POST" onSubmit={this.alertMessage}>
                    <div><label htmlFor="fullName" className="form-label">Full Name <span className="asterix">*</span></label></div>
                    <div><input type="text" id="fullName" name="fullName" required/></div>

                    <div><label htmlFor="email" className="form-label">E-mail <span className="asterix">*</span></label></div>
                    <div><input type="email" id="email" name="email" required/></div>

                    <div><label htmlFor="message" className="form-label">Message <span className="asterix">*</span></label></div>
                    <div><textarea id="message" name="message" required></textarea></div>

                    <div id="btn-submit"><button type="submit" className="btn-type2">Submit</button></div>
                </form>
            </div>
        );
    }

    alertMessage = (event) => {
        if( (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(document.getElementById('email').value)) ) {
            alert("Your form was submitted\nThank You!");
        }
        else {
            event.preventDefault();
            alert("Requires avalid email address");
        }
    }
}
export default ContactUsPage;