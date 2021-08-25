import axios from "axios";
import { useStore } from "react-redux";
import { getAllUsersURL, registerUserURL, updateUserURL } from "../Constants/APIConstants";
// import { useDispatch } from "react-redux";
import { FILTER_USERS, GET_USERS } from "../Constants/ReduxActionTypes";
import store from '../ReduxStore/Store';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// const dispatch = useDispatch();
// const store = useStore();

export const getUsers = () => dispatch => {
    axios.get(getAllUsersURL)
        .then((response: any) => {
            dispatch({
                type: GET_USERS,
                payload: response.data.user,
            })
        }).catch((error: any) => {
            console.log("*****************************************************", error);
        });
}

export const filterUsers = (param: any) => dispatch => {
    axios.get(getAllUsersURL)
        .then((response: any) => {
            if (param) {
                dispatch({
                    type: FILTER_USERS,
                    payload: response.data.user.filter((u: object) => JSON.stringify(u.id).startsWith(param) || u.firstName.toUpperCase().startsWith(param.toUpperCase()) || u.lastName.toUpperCase().startsWith(param.toUpperCase()) || u.phoneNumber.startsWith(param)),
                    filterParam: param,
                })
            } else {
                dispatch({
                    type: FILTER_USERS,
                    payload: response.data.user,
                })
            }
        }).catch((error: any) => {
            console.log("*", error);
        });
}

export const registerWebUser = (body: any) => {
    return new Promise((resolve, reject) =>
        axios.post(registerUserURL, body)
            .then((response) => {
                console.log("*******************************", response);
                resolve(response);
            })
            .catch((error) => {
                console.log("*******************************", error);
                reject(error);
            })
    )
}

export const updateWebUser = (body: any) => {
    return new Promise((resolve, reject) =>
        axios.post(updateUserURL, body)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    )
}