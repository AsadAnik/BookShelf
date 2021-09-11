import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBooks } from './../actions';
import BookItem from '../widgetsUI/bookItem';

class HomeContainer extends Component {
    // Lifecycle method..
    componentDidMount(){
        this.props.dispatch(getBooks(1, 0, 'desc'));
    }

    // showing list..
    showBooks = (Books) => {
            if (!Books.list){
                return (
                    <h1>Loading..</h1>
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

        this.props.dispatch(getBooks(1, count, 'desc', newList));
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
