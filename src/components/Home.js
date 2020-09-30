import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IsItABiscuitLogo from '../images/IsItABiscuitLogo.png'

import SearchBar from './SearchBar/SearchBar';
import BiscuitRoutes from './Results/BiscuitRoutes';

import "./Home.css";


function Home() {
    return(
        <Router>
            <div id="home_container">
                <img src={IsItABiscuitLogo} alt="Logo" />
                <h1>Is It A Biscuit?</h1>
                <h3>Search below to find out!</h3>
                <SearchBar />
                <Switch>
                    <Route path="/biscuitResults" component={BiscuitRoutes} />
                </Switch>
            </div>
        </Router>
    )
}

export default Home;