import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';

import Home from './components/Home';
import Book from "./components/Book";


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/book/:id" component={Book} />
            </Switch>
        </Layout>
    );
};

export default Routes;
