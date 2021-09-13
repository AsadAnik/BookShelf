import React from 'react';
import BookContainer from "../../containers/BookContainer";

const Book = (props) => {
    return (
       <>
            <BookContainer {...props} />
       </>
    );
};

export default Book;
