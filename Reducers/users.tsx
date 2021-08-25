import { FILTER_USERS, GET_USERS } from "../Constants/ReduxActionTypes";

const initialState = {
    users: [],
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case FILTER_USERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}