import ACTION from "./action";
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.UPDATE_CART: return { ...state, cart: action.payload, isLoading: true };
        case ACTION.UPDATE_FAVOURITE: return { ...state, favourite: action.payload };
        case ACTION.SHOW_LOADING: return { ...state, isLoading: true };
        case ACTION.HIDE_LOADING: return { ...state, isLoading: false };
        default: return state;
    }
}
export default reducer;