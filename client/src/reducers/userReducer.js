// Users Reducer...
export default function(state={}, action){
    switch (action.type){

        case "USER_LOGIN":
            return {...state, login: action.payload};

        case "USER_AUTH":
            return {...state, login: action.payload};

        case "GET_USER_BOOKS":
            return {...state, userBooks: action.payload};

        case "GET_USERS":
            return {...state, users: action.payload};

        case "USER_REGISTER":
            return {
                ...state,
                register: action.payload.success,
                users: action.payload.users,
            };

        case "LOGOUT_USER":
            return {...state, logout: action.payload};

        default:
            return state;
    }
}
