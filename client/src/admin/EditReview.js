import React, {PureComponent} from 'react';
import { getBook ,updateBook, clearBook, deleteBook } from "../actions/BooksAction";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

// Component..
class EditReview extends PureComponent {
    // Constructor..
    constructor(props) {
        super(props);

        // state..
        this.state = {
            formData: {
                _id: this.props.match.params.id,
                name: '',
                author: '',
                review: '',
                pages: '',
                rating: '',
                price: '',
            }
        };
        // dispatching an action..
        this.props.dispatch(getBook(this.props.match.params.id));
    }

    // after components unmount..
    componentWillUnmount() {
        this.props.dispatch(clearBook());
    }

    // fill the state from next props of component..
    componentWillReceiveProps(nextProps) {
        const Book = nextProps.Books.book;

        if (Book){
            this.setState({
                formData: {
                    _id: Book._id,
                    name: Book.name,
                    author: Book.author,
                    review: Book.review,
                    pages: Book.pages,
                    rating: Book.rating,
                    price: Book.price,
                }
            });
        }
    }

    // input change handler method..
    handleOnChange = (event, type) => {
        const name = type.toLowerCase();
        const newFormData = {
            ...this.state.formData,
        };

        newFormData[name] = event.target.value;
        this.setState({
            formData: newFormData,
        });
    }

    // redirecting user after delete..
    redirectUser = () => {
        setTimeout(() => {
            this.props.history.push(`/user/user-reviews`);
        }, 1000);
    };

    // delete button clicked here..
    deleteReview = () => {
        console.log('clicked to delete');
        this.props.dispatch(deleteBook(this.state.formData._id));
    };

    // Delete Book Msg showing..
    bookDeleteMsg = (Book) => {
        return Book.deleteBook ? (
            <div className={'red_tag'}>
                Post Deleted!
                {this.redirectUser()}
            </div>
        ) :
            null;
    };

    // Update Book Msg showing..
    bookUpdateMsg = (Book) => {
        return Book.updateBook ? (
            <div className={'edit_confirm'}>
                Post updated, <Link to={`/book/${Book.book._id}`}>See your update!</Link>
            </div>
        ) :
            null;
    };

    // form submit returns with an object..
    submitForm = (event) => {
        event.preventDefault();
        this.props.dispatch(updateBook(this.state.formData));
    };

    // the rendering method..
    render() {
        // Took book from Books object..
        const { Books } = this.props;

        return (
            <div className="rl_container article">
                {/*--- Book Update Message ---*/}
                {this.bookUpdateMsg(Books)}

                {/*--- Book Delete Message ---*/}
                {this.bookDeleteMsg(Books)}

                <form action="" onSubmit={this.submitForm}>
                    <h2>Edit a review</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formData.name}
                            onChange={(event) => this.handleOnChange(event, "NAME")}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter author"
                            value={this.state.formData.author}
                            onChange={(event) => this.handleOnChange(event, "AUTHOR")}
                        />
                    </div>

                    <textarea
                        value={this.state.formData.review}
                        placeholder="Write review.."
                        onChange={(event) => this.handleOnChange(event, "REVIEW")}
                    />

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter pages"
                            value={this.state.formData.pages}
                            onChange={(event) => this.handleOnChange(event, "PAGES")}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            value={this.state.formData.rating}
                            onChange={(event) => this.handleOnChange(event, "RATING")}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter price"
                            value={this.state.formData.price}
                            onChange={(event) => this.handleOnChange(event, "PRICE")}
                        />
                    </div>

                    {/*---- Edit Review Button -----*/}
                    <button type={'submit'}>Edit Review</button>

                    {/*---- Delete Review Button ----*/}
                    <div className="delete_post">
                        <div className={'button'} onClick={this.deleteReview}>Delete Review</div>
                    </div>
                </form>
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

export default connect(mapStateToProps)(EditReview);
