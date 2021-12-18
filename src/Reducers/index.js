import { combineReducers } from "redux";
import { github } from "./github";
import { color } from "./color";
import { page } from "./page";
export default combineReducers({
  github,
  color,
  page,
});
