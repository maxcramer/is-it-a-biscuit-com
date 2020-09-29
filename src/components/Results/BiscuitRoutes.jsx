import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BiscuitResults from './BiscuitResults';

const BicsuitList = () => {
    <Switch>
        <Route path='BiscuitResults/._id' component={BiscuitResults} />
    </Switch>
}