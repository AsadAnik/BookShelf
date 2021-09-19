import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../actions/UsersAction';


class Login extends Component {
    // Constructor method..
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            success: false
        };
    }

    // componentWillReceiveProps to next and previous state..
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.User.login.isAuth){
            this.props.history.push('/user');
        }
    }

    // showing the error message..
    showErrorMessage = (User) => (
        User.login && <div className="error">{User.login.message}</div>
    );

    // submit form..
    submitForm = (event) => {
        event.preventDefault();
        this.props.dispatch(loginUser(this.state));
    };

    // inputs handler..
    handleInput = (event, type) => {
        if (type === 'email'){
            this.setState({...this.state, email: event.target.value});
        }

        if (type === 'password'){
            this.setState({...this.state, password: event.target.value});
        }
    };


    // Rendering method..
    render() {
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Login Here</h2>

                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            value={this.state.email}
                            onChange={(event) => this.handleInput(event, 'email')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={(event) => this.handleInput(event, 'password')}
                        />
                    </div>

                    {/*---- If Error Message so show it ----*/}
                    { this.showErrorMessage(this.props.User) }

                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        User: state.Users
    };
};

export default connect(mapStateToProps)(Login);
