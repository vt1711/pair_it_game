import pointschange from "./newscore";
import currentpoint from "./currentpoint";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    pointschange,
    currentpoint
})

export default rootReducer;
