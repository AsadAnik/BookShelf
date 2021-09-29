import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/BooksAction';
import BookItem from '../widgetsUI/bookItem';

class HomeContainer extends Component {
    // Constructor..
    constructor(props) {
        super(props);
        this.props.dispatch(getBooks(5, 0, 'desc'));
    }

    // Lifecycle method..
    // componentDidMount(){
    //     this.props.dispatch(getBooks(1, 0, 'desc'));
    // }

    // showing list..
    showBooks = (Books) => {
            if (!Books.list){
                return (
                    <div className="loader">Loading...</div>
                );

            }else{
                return Books.list.map((item) => (
                   <BookItem {...item} key={item._id} />
                ));
            }
    };

    // Loading more data..
    loadmore = () => {
        let count = this.props.Books.list.length;
        let newList = this.props.Books.list;

        this.props.dispatch(getBooks(2, count, 'desc', newList));
    };

    // rendering method..
    render() {
        return (
            <div>
                { this.showBooks(this.props.Books) }
                <div className="loadmore" onClick={this.loadmore}>Load More</div>
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
