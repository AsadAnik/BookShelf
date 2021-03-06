// Books Reducer..
export default function(state={}, action){
    switch (action.type){

        case "GET_BOOKS":
            return {...state, list: action.payload};

        case "GET_BOOK_WITH_REVIEWER":
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            };

        case "CLEAR_BOOK_WITH_REVIEWER":
            return {
                ...state,
                book: action.payload.book,
                reviewer: action.payload.reviewer
            };

        case "ADD_BOOK":
            return {...state, newBook: action.payload};

        case "CLEAR_BOOK_LIST":
            return {...state, newBook: action.payload};

        case "GET_BOOK":
            return {...state, book: action.payload};

        case "UPDATE_BOOK":
            return {
                ...state,
                updateBook: action.payload.success,
                book: action.payload.docs
            };

        case "BOOK_DELETE":
            return {...state, deleteBook: action.payload};

        case "CLEAR_BOOK":
            return {
                ...state,
                book: action.payload.book,
                updateBook: action.payload.updateBook,
                deleteBook: action.payload.deleteBook
            };

        default:
            return state;
    }
}
