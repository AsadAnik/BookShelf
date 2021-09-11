import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBookWithReviewer } from '../../actions';

const Book = (props) => {
    const id = props.match.params.id;

    useEffect(() => {
            props.dispatch(getBookWithReviewer(id));
    }, []);

    console.log(props);


    return (
        <div>
            <h1>Book id: {id}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        book: state.Books
    }
};

export default connect(mapStateToProps)(Book);
