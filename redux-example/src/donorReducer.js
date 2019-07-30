import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export const myActionCreator = (list) => {
    return{
        type: 'GET_ALL_DONORS',
        payload: list
    }
}

export function getListByThunk(){
    return function(dispatch){
        axios.get("http://localhost:6969/bloodDonors").
        then(resp => dispatch(myActionCreator(resp.data)));
    };
}

const nameInitialState = [{
    "id": 101,
    "donorName": "Sam Fisher",
    "bloodGroup": "opos",
    "phone": 823750827,
    "lastDonated": "2019-06-12"
  }];
export const donorReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DONORS':
            return Object.assign({}, action);
        default:
            return state
    }
}

let restStore = createStore(donorReducer, applyMiddleware(thunk));

export default restStore;