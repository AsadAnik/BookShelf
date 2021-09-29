import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userBooks } from '../../actions/UsersAction';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

// Component..
class UserReview extends Component {
    // Constructor method..
    constructor(props) {
        super(props);
        this.props.dispatch(userBooks(this.props.User.login.id));
    }

    // Showing user books..
    showUserReviews = (User) => {
        return User.userBooks ?
            User.userBooks.map(item => (
                <tr key={item._id}>
                    <td>
                        <Link to={`/user/edit-review/${item._id}`}>{item.name}</Link>
                    </td>
                    <td>{item.author}</td>
                    <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                </tr>
            ))
            :
            null;
    };

    // Rendering method..
    render() {
        const { User } = this.props;

        return (
            <div className="user_posts">
                <h4>Your reviews:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.showUserReviews(User)}
                    </tbody>
                </table>
            </div>
        );
    }
}

// mapStateToProps..
const mapStateToProps = (state) => {
    return {
        Books: state.Books
    };
};

export default connect(mapStateToProps)(UserReview);
