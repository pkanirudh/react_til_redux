import reducer from './reducer';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from 'redux';

export const birth = {
    type: "BIRTHDAY",
    message: "Happy Birthday macha"
}

export const valen = {
    type: "BIRTHDAY",
    message: "Happy Valentine's Day mon amour"
}

export const login = {
    type: "LOGIN",
    message: "Log Out",
    status: true
}

export const logout = {
    type: "LOGOUT",
    message: "Log In",
    status: false
}

const store = createStore(reducer, composeWithDevTools());

export default store;