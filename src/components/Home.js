import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IsItABiscuitLogo from '../images/IsItABiscuitLogo.png'

import SearchBar from './SearchBar/SearchBar';
import BiscuitRoutes from './Results/BiscuitRoutes';
import BiscuitLogo from './BiscuitLogo/BiscuitLogo';

import "./Home.css";


function Home() {
    return(
        <Router>
            <div id="home_container">
                {/* <a href="/">
                    
                </a> */}
                {/* <h1 id="title">Is It A Biscuit?</h1>
                <h3 id="subtitle">Search below to find out!</h3> */}
                <SearchBar />
                {/* <img id="logo" src={IsItABiscuitLogo} alt="Logo"  /> */}

                <Switch>
                    <Route path="/" exact component={BiscuitLogo} />
                    <Route path="/biscuitResults" component={BiscuitRoutes} />
                </Switch>
            </div>
        </Router>
    )
}

export default Home;