import ACTION from "./action";
const updateLocalStorage = (state) => {
    localStorage.setItem("state", JSON.stringify(state));
    return state;
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.UPDATE_CART: return updateLocalStorage({ ...state, cart: action.payload, isLoading: true });
        case ACTION.UPDATE_FAVOURITE: return updateLocalStorage({ ...state, favourite: action.payload });
        case ACTION.SHOW_LOADING: return updateLocalStorage({ ...state, isLoading: true });
        case ACTION.HIDE_LOADING: return updateLocalStorage({ ...state, isLoading: false });
        case ACTION.UPDATE_KEYWORD: return updateLocalStorage({ ...state, keyword: action.payload })
        default: return state;
    }
}
export default reducer;