import { LOG_OUT, SET_USER } from "../actions/ActionType";

const InitialState = {
    loggedIn: false,
    user: {}
};

const CurrentUser = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
};

export default CurrentUser;