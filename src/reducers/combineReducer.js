import { combineReducers } from "redux";
import product from './productReducer';

const reducer = combineReducers({
    product : product,
});

export default reducer;