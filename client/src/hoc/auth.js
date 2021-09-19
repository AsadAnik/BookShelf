import React from 'react';
import { connect } from "react-redux";
import { auth } from "../actions/UsersAction";

export default function(Comp, restrictionLoading) {
    class AuthCheck extends React.Component {
        // Constructor method..
        constructor(props) {
            super(props);

            // state..
            this.state = {
                loading: true,
            };

            // dispatching the auth action..
            this.props.dispatch(auth());
        }

        // alternative of componentWillReceiveProps lifecycle..
        // getDerivedStateFromProps lifecycle..
        // static getDerivedStateFromProps(nextProps) {
        //    console.log(nextProps);
        //
        //    if (nextProps.User){
        //        if (!nextProps.User.login.isAuth || nextProps.User.login.error){
        //            if (restrictionLoading === true){
        //                nextProps.history.push('/login');
        //            }
        //        }else{
        //            if (restrictionLoading === false){
        //                nextProps.history.push('/user');
        //            }
        //        }
        //    }
        //
        //     return ({ loading: false });
        // }

        componentWillReceiveProps(nextProps) {
            this.setState({loading: false});

                if (!nextProps.User.login.isAuth){
                    if (restrictionLoading === true){
                        this.props.history.push('/login');
                    }
                }else {
                    if (restrictionLoading === false) {
                        this.props.history.push('/user');
                    }
                }
        }


        // Rendering method..
        render(){
            if (!this.state.loading){
                return <Comp {...this.props} User={this.props.User} />;
            }

            return <div className="loader">Loading...</div>;
        }
    }

    function mapStateToProps(state){
        return {
            User: state.Users
        };
    }

    return connect(mapStateToProps)(AuthCheck);
}
