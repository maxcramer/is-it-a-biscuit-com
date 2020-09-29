import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BiscuitResults from './BiscuitResults';

const BiscuitList = () => (
    <Switch>
        <Route path='/biscuitResults._id' component={BiscuitResults} />
    </Switch>
)

export default BiscuitList;