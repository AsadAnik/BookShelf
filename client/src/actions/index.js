import axios from 'axios';

export function getBooks(limit = 5, start = 0, order = 'asc'){

    const request = axios.get(`/api/books?limit=${limit}&start=${start}$order=${order}`)
        .then(response => response.data)
        .catch(err => err.message);

    return {
        type: "GET_BOOKS",
        payload: request
    };
}
