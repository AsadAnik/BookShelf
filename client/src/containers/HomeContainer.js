import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBooks } from './../actions';

class HomeContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getBooks(3, 0, 'asc'));
    }

    // rendering method..
    render() {

        console.log(this.props);

        return (
            <div>
                <h1>Home Container!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Books: state.Books,
    };
};

export default connect(mapStateToProps)(HomeContainer);
