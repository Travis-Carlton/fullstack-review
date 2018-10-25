const initialState = {
    user: null
};

const USER_LOGIN = 'USER_LOGIN'

export default function reducer(sT = initialState, action){
    switch(action.type){
        case USER_LOGIN:
            return {...sT, user: action.payload};
        default:
            return sT;
    }
}

export function userLogin(user){
    return {
        type: USER_LOGIN,
        payload: user
    }
}