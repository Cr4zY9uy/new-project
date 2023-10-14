import FAVOURITE_ACTION from "./favouriteAction";
const updateLocalStorage = (state) => {
    localStorage.setItem("favourite", JSON.stringify(state));
    return state;
}
const STATE = {
    favourite: []
}
const initData = localStorage.getItem("favourite") ? JSON.parse(localStorage.getItem("favourite")) : STATE;

const favourite_reducer = (state = initData, action) => {
    switch (action.type) {
        case FAVOURITE_ACTION.UPDATE_FAVOURITE: return updateLocalStorage({ ...state, favourite: action.payload });
        case FAVOURITE_ACTION.DELETE_FAVOURITE: return updateLocalStorage({ ...state, favourite: [] });
        default: return state;
    }
}
export default favourite_reducer;