import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBookWithReviewer, clearBookWithReviewer } from '../actions/BooksAction';

class BookContainer extends Component {
    // id of specific Book..
    id = this.props.match.params.id;

    // Constructor..
    constructor(props) {
        super(props);
        this.props.dispatch(getBookWithReviewer(this.id));
    }

    // Unmounting Component..
    componentWillUnmount() {
        this.props.dispatch(clearBookWithReviewer());
    }

    // Book data View..
    renderBook(Books) {
        const { book, reviewer } = Books;

        if (book && reviewer) {
            return (
                <div className="br_container">
                    <div className="br_header">
                        <h2>{book.name}</h2>
                        <h5>{book.author}</h5>

                        <div className="br_reviewer">
                            <span>Review by: </span>
                            <span>{reviewer.firstname}</span>
                            <span>{reviewer.lastname}</span>
                        </div>
                    </div>

                    <div className="br_review">{book.review}</div>

                    <div className="br_box">
                        <div className="left">
                            <div>
                                <span>Pages: </span>
                                <span>{book.pages}</span>
                            </div>

                            <div>
                                <span>Price: </span>
                                <span>{book.price}</span>
                            </div>
                        </div>

                        <div className="right">
                            <div>
                                <span>Rating</span>
                                <div>{book.rating} \ 5</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return <h1>Loading...</h1>
        }
    }


    // Rendering Method..
    render() {
        const Books = this.props.Books;

        return (
            <>
                {this.renderBook(Books)}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Books: state.Books
    };
};

export default connect(mapStateToProps)(BookContainer);
