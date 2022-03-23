export const authAction = (isAuth, login) => async dispatch => {
    dispatch({type: "AUTH_IS_SUCCESS" , authPayload: isAuth, loginPayload: login });
}