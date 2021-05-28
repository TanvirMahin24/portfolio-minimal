import { combineReducers } from "redux";
import { github } from "./github";
import { color } from "./color";
export default combineReducers({
  github,
  color,
});
