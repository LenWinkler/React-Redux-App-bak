import axios from "axios"

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchActivity = () => dispatch => {
        dispatch({ type: 'START_FETCHING'})

        axios
            .get('http://www.boredapi.com/api/activity/')
            .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: 'FETCH_FAILURE', payload: err.response}))
    }


// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action);
//     } else if (typeof action === 'function') {
//         action(store.dispatch);
//     }
// }