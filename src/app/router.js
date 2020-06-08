import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InitialPage from '../features/initial/InitialPage';
import EncryptPage from '../features/encrypt/EncryptPage';
import DecryptPage from '../features/decrypt/DecryptPage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={InitialPage} />
            <Route path="/encrypt" component={EncryptPage} />
            <Route path="/decrypt" component={DecryptPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
