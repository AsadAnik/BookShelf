import React, {Component} from 'react';
import { addBook, clearBookList } from './../actions/BooksAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AddReview extends Component {
    // Constructor..
    constructor(props) {
        super(props);

        // state..
        this.state = {
            formData: {
                name: '',
                author: '',
                review: '',
                pages: '',
                rating: '',
                price: '',
            }
        };
    }

    // after components unmount..
    componentWillUnmount() {
        this.props.dispatch(clearBookList());
    }

    // See book after review created..
    showBook = (newBook) => {
        return !newBook.post ? null : (
            <div className="conf_link">
                Cool !! <Link to={`/book/${newBook.bookId}`}>see the book</Link>
            </div>
        );
    };

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

    // form submit returns with an object..
    submitForm = (event) => {
        event.preventDefault();

        this.props.dispatch(addBook({
            ...this.state.formData,
            ownerId: this.props.User.login.id
        }));
    };

    // Rendering method..
    render() {
        return (
           <div className="rl_container article">
               <form action="" onSubmit={this.submitForm}>
                   <h2>Add a review</h2>

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

                   <button type={'submit'}>Add Review</button>

                   {/*---- If added so show the book ----*/}
                   { this.props.Books.newBook && this.showBook(this.props.Books.newBook) }
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

export default connect(mapStateToProps)(AddReview);
