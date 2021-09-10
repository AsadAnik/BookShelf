import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Routes from './routes';
import Reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);


const App = () => (
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <Router>
            <Routes />
        </Router>
    </Provider>
);

export default App;
