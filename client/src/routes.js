import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import Book from "./components/Book";

import Login from './admin/login';
import Register from './admin/register.js';
import Logout from './admin/logout';

import User from './components/Admin';
import AddReview from './admin/AddReview';
import EditReview from './admin/EditReview';
import UserReview from './components/Admin/userReview';


// Route..
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/register" exact component={Auth(Register, false)} />
                <Route path="/logout" exact component={Auth(Logout, true)} />
                <Route path="/user" exact component={Auth(User, true)} />

                <Route path="/book/:id" exact component={Auth(Book, true)} />
                <Route path="/user/add-review" exact component={Auth(AddReview, true)} />
                <Route path="/user/edit-review/:id" exact component={Auth(EditReview, true)} />
                <Route path="/user/user-reviews" exact component={Auth(UserReview, true)} />
            </Switch>
        </Layout>
    );
};

export default Routes;
