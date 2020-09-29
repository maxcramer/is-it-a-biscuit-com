import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchBar from './SearchBar/SearchBar';
import BiscuitRoutes from './Results/BiscuitRoutes';

function Home() {
    return(
        <Router>
            <SearchBar />
            <Switch>
                <Route path="/biscuitResults" component={BiscuitRoutes} />
            </Switch>
        </Router>
    )
}

export default Home;