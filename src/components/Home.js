import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchBar from './SearchBar/SearchBar';
import BiscuitRoutes from './Results/BiscuitRoutes';
import BiscuitLogo from './BiscuitLogo/BiscuitLogo';

import "./Home.css";


function Home() {
    return(
        <Router>
            <div id="home_container">
                <SearchBar />
                <Switch>
                    <Route path="/" exact component={BiscuitLogo} />
                    <Route path="/biscuitResults" component={BiscuitRoutes} />
                </Switch>
            </div>
        </Router>
    )
}

export default Home;