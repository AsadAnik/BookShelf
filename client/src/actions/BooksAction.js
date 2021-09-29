import axios from 'axios';

// Home Books Action..
export function getBooks(limit = 5, start = 0, order = 'asc', list = ''){

    const request = axios.get(`/api/books?limit=${limit}&skip=${start}$order=${order}`)
        .then(response => {
            if (list){
                return [...list, ...response.data];

            }else{
                return response.data;
            }
        })
        .catch(err => err.message);

    return {
        type: "GET_BOOKS",
        payload: request
    };
}

// Specific Book & ownerReviewer from Book's Action..
export function getBookWithReviewer(id){
    const request = axios.get(`/api/getBook?id=${id}`);

    return (dispatch) => {
        request.then(({data}) => {
            let book = data;

            axios.get(`/api/getReviewer?ownerId=${book.ownerId}`)
                .then(({data}) => {
                    let response = {
                        book,
                        reviewer: data
                    };

                    dispatch({
                        type: "GET_BOOK_WITH_REVIEWER",
                        payload: response
                    });
                });
        });
    };
}

// to clear data when unmount from component..
export function clearBookWithReviewer(){
    return {
        type: "CLEAR_BOOK_WITH_REVIEWER",
        payload: {
            book: {},
            reviewer: {}
        }
    };
}


// Add Book Reviewer..
export function addBook(Book){
    const request = axios.post(`/api/book`, Book)
        .then(response => response.data)
        .catch(error => error.message);

    return {
        type: "ADD_BOOK",
        payload: request
    };
}

// Clear BookList after submit..
export function clearBookList(){
    return {
        type: "CLEAR_BOOK_LIST",
        payload: {}
    };
}


// Get Specific book for update/edit..
export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
        .then(response => response.data)
        .catch(err => err.message);

    return {
        type: "GET_BOOK",
        payload: request
    };
}

// Update/Edit Book..
export function updateBook(data){
    const request = axios.post(`/api/book_update`, data)
        .then(response => response.data)
        .catch(err => err.message);

    return {
        type: "UPDATE_BOOK",
        payload: request
    };
}


// Delete/Remove Book..
export function deleteBook(id){
    const request = axios.delete(`/api/delete_book?id=${id}`)
        .then(response => response.data)
        .catch(err => err.message);

    return {
        type: "BOOK_DELETE",
        payload: request
    };
}

// Clear Edit-Book component after work..
export function clearBook(){
    return {
        type: "CLEAR_BOOK",
        payload: {
            book: {},
            updateBook: false,
            deleteBook: false
        }
    };
}
