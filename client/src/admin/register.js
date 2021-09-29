import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { getUsers, registerUser } from "../actions/UsersAction";

const Register = (props) => {
    // components state hook..
    const [state, setState] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    });


    // useMemo Hook alternative of componentWillReceiveProps..
    useMemo(() => {
        if (props.Users.register === false){
            setState({...state, error: 'Error, try again!'});
        }else{

            setState({
                ...state,
                name: '',
                lastname: '',
                email: '',
                password: ''
            });
        }
    }, [props]);


    // useEffect Hook..
    useEffect(() => {
        // action dispatched for get all registered users..
        props.dispatch(getUsers());
    }, []);


    // data with the table body..
    const tableBodyWithUsers = (Users) => {
        if (Users.users){
            return Users.users.map(user => (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                </tr>
            ));
        }
        return (
            <tr>
                <td><div className="loader">Loading...</div></td>
                <td><div className="loader">Loading...</div></td>
                <td><div className="loader">Loading...</div></td>
            </tr>
        );
    };


    // change Handler function..
    const handleOnChange = (event, type) => {
        const ourState = {...state};
        const name = type.toLowerCase();

        ourState[name] = event.target.value;

        setState({
            ...ourState,
        });
    };


    // handle when form submit..
    const handleSubmit = (event) => {
        event.preventDefault();
        setState({...state, error: ''});

        props.dispatch(registerUser({
            name: state.name,
            lastname: state.lastname,
            email: state.email,
            password: state.password
        }, props.Users.users));
    };


    // Returning statement..
    return (
        <div className={'rl_container'}>
            {/*--- User Registering ---*/}
            <form onSubmit={handleSubmit}>
                <h2>Register User</h2>

                <div className={'form_element'}>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={state.name}
                        onChange={(e) => handleOnChange(e, "NAME")}
                    />
                </div>

                <div className={'form_element'}>
                    <input
                        type="text"
                        placeholder="Enter lastname"
                        value={state.lastname}
                        onChange={(e) => handleOnChange(e, "LASTNAME")}
                    />
                </div>

                <div className={'form_element'}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={(e) => handleOnChange(e, "EMAIL")}
                    />
                </div>

                <div className={'form_element'}>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={state.password}
                        onChange={(e) => handleOnChange(e, "PASSWORD")}
                    />
                </div>

                <button type={'submit'}>Register!</button>

                {/*--- Error showing if exist ---*/}
                <div className="error">
                    {state.error}
                </div>
            </form>

            {/*--- Showing the current users ---*/}
            <div className="current_users">
                <h4>Current Users: </h4>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                    </thead>

                    <tbody>
                    { tableBodyWithUsers(props.Users) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// mapStateToProps..
const mapStateToProps = (state) => {
    return {
        Users: state.Users
    };
};

export default connect(mapStateToProps)(Register);
