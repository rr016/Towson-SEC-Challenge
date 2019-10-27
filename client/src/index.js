// Author: Rafal Ryczek
// Visual Studio Code

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import SplashPage from './components/SplashPage';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path='/' component={SplashPage} />
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();