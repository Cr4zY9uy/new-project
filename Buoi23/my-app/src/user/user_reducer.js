import USER_ACTION from "./userAction";
const updateLocalStorage = (state) => {
    localStorage.setItem("user", JSON.stringify(state));
    return state;
}
const STATE = {
    user: {},
    jwt: ""
}
const initData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : STATE;

const user_reducer = (state = initData, action) => {
    switch (action.type) {
        case USER_ACTION.LOGIN: return updateLocalStorage({ ...state, jwt: action.payload });
        // case USER_ACTION.LOGIN: return updateLocalStorage({ ...state, user: action.payload.user, jwt: action.payload.jwt });
        case USER_ACTION.REGISTER: return updateLocalStorage({ ...state, user: "" });
        default: return state;
    }
}
export default user_reducer;