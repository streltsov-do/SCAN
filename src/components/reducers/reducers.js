import { combineReducers } from "redux";

import rLogin from "./login";
import rSearch from "./search";

export default combineReducers({
    rLogin,
    rSearch
});