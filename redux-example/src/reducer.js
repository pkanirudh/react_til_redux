const reducer = (state ={message:"Initial Log in"}, action) => {
    switch (action.type) {
        case 'BIRTHDAY':
            return Object.assign({}, action);
        case 'VALENTINESDAY':
            return {...action};
        case 'LOGIN':
            return{...action};
        case 'LOGOUT':
            return{...action};
        default:
            return state
    }
}

export default reducer;