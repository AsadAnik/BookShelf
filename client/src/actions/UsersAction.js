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

// Showing all users..
export function getUsers(){
    const request = axios.get('/api/users')
        .then(response => response.data)
        .catch(err => err.message);

    return {
        type: "GET_USERS",
        payload: request
    };
}

// Register New User..
export function registerUser(User, currentUsersList){
    const request = axios.post('/api/register', User);

    return (dispatch) => {
        request.then(({data}) => {
            const users = !data.success ? currentUsersList : [...currentUsersList, data.user];
            let response = {
                success: data.success,
                users
            };

            dispatch({
                type: "USER_REGISTER",
                payload: response
            });
        });
    };
}


// Logout User..
export function logoutUser(props){
    const request = axios.get('/api/logout')
        .then(() => {
            setTimeout(() => {
                props.history.push('/');
            }, 2000);
        });

    return {
        type: "LOGOUT_USER",
        payload: request
    };
}
