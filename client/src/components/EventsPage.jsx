// Author: Rafal Ryczek
// Visual Studio Code

import React, { Component } from 'react';
import './Main.css';

class EventsPage extends Component {
    render() {
        return (
            <div>
                <div id="left-side2" className="column2">
                    <img className="image-SEC-club3" src={require("./img/asset3.png")} alt="SEC event"/>
                </div>

                <div id="right-side2" className="column2">
                    <div className="form-header">
                        <p id="text-events">Events</p>
                    </div>
                    <table className="events-list">
                        <tbody>
                            <tr>
                                <td className="left-cell">Nov<br/>1</td>
                                <td>
                                    Super Smash Bros Melee Tournament<br/>
                                    <a href="https://www.facebook.com/events/453807148818488/">Details</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-cell">Oct<br/>14</td>
                                <td>
                                    Intro to Docker<br/>
                                    <a href="https://www.facebook.com/events/525454868029698/">Details</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-cell">Oct<br/>7</td>
                                <td>
                                    Spring Boot Workshop<br/>
                                    <a href="https://www.facebook.com/events/551985348897101/">Details</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-cell">Sep<br/>25</td>
                                <td>
                                    Introduction to Jupyter Notebooks<br/>
                                    <a href="https://www.facebook.com/events/371187000434576/">Details</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-cell">Sep<br/>26</td>
                                <td>
                                    Lunch and Learn<br/>
                                    <a href="https://www.facebook.com/events/2406279999659593/">Details</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-cell">Sep<br/>23</td>
                                <td>
                                    DOM Manipulation with Vanilla Javascript<br/>
                                    <a href="https://www.facebook.com/events/2103524459951437/">Details</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="left-cell">Sep<br/>9</td>
                                <td>
                                    General Interest Meeting<br/>
                                    <a href="https://www.facebook.com/events/736698416797683/">Details</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EventsPage;