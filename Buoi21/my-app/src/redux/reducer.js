import ACTION from "./action";
import STATE from "./initState";
const updateLocalStorage = (state) => {
    localStorage.setItem("state", JSON.stringify(state));
    return state;
}
const initData = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : STATE;

const reducer = (state = initData, action) => {
    switch (action.type) {
        case ACTION.UPDATE_CART: return updateLocalStorage({ ...state, cart: action.payload, isLoading: true });
        case ACTION.DELETE_CART: return updateLocalStorage({ ...state, cart: "" });
        case ACTION.UPDATE_FAVOURITE: return updateLocalStorage({ ...state, favourite: action.payload });
        case ACTION.SHOW_LOADING: return updateLocalStorage({ ...state, isLoading: true });
        case ACTION.HIDE_LOADING: return updateLocalStorage({ ...state, isLoading: false });
        case ACTION.UPDATE_KEYWORD: return updateLocalStorage({ ...state, keyword: action.payload })
        case ACTION.DELETE_KEYWORD: return updateLocalStorage({ ...state, keyword: "" })
        case ACTION.ADD_USER: return updateLocalStorage({ ...state, user: action.payload })
        case ACTION.ADD_CURRENT_USER: return updateLocalStorage({ ...state, currentUser: action.payload })
        default: return state;
    }
}
export default reducer;