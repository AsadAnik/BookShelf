import axios from 'axios';

// User Login..
export function loginUser({ email, password }){
    const request = axios.post('/api/login', { email, password })
        .then(response => response.data)
        .catch(error => error);

    return {
        type: "USER_LOGIN",
        payload: request
    };
}

// AuthChecker on HOC..
export function auth(){
    const request = axios.get('/api/auth')
        .then(response => response.data);

    return {
        type: "USER_AUTH",
        payload: request
    };
}

// Specific user's Books..
export function userBooks(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
        .then(response => response.data)
        .catch(error => error.message);

    return {
        type: "GET_USER_BOOKS",
        payload: request
    };
}
