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
