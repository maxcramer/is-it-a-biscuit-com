import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BiscuitResults from './BiscuitResults';

const BiscuitList = () => (
    <Switch>
        <Route path='/biscuitList/:id' component={BiscuitResults} />
    </Switch>
)

export default BiscuitList;