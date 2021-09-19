import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import Book from "./components/Book";
import Login from './admin/login';
import User from './components/Admin';
import AddReview from './admin/AddReview';
import UserPosts from './components/Admin/userPosts';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/bogit ok/:id" exact component={Auth(Book, true)} />
                <Route path="/user/add-review" exact component={Auth(AddReview, true)} />
                <Route path="/user/user-reviews" exact component={Auth(UserPosts, true)} />
            </Switch>
        </Layout>
    );
};

export default Routes;
