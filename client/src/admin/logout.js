import React from 'react';
// import axios from "axios";
import { connect } from 'react-redux';
import { logoutUser } from '../actions/UsersAction';

// logout component..
const Logout = (props) => {
    // const request = axios.get('/api/logout')
    //     .then(() => {
    //         setTimeout(() => {
    //             props.history.push('/');
    //         }, 2000);
    //     });

    // useEffect Hook..
    React.useEffect(() => {
        props.dispatch(logoutUser(props));
    }, []);


    // Returning Statement..
    return (
        <div className='logout_container'>
            <h1>Sorry to see you go :(</h1>
        </div>
    );
};

export default connect(null, null)(Logout);
