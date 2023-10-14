import { combineReducers } from "redux";
import cart_reducer from "./cart/cart_reducer";
import user_reducer from "./user/user_reducer";
import favourite_reducer from "./favourite/favourite_reducer";
const root_reducer = combineReducers({
    cart_reducer,
    user_reducer,
    favourite_reducer
})
export default root_reducer;