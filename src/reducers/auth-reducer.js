export const authReducer = (state = {isAuth: false}, action) => {
    switch(action.type) {
        case "AUTH_IS_SUCCESS":
            return { isAuth: action.authPayload, login: action.loginPayload };
        default:
            return state
    }
}