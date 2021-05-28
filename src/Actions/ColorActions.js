import { SET_PRIMARY_COLOR } from "../Constants/Types";

export const setPrimaryColor = (color) => (dispatch) => {
  dispatch({
    type: SET_PRIMARY_COLOR,
    payload: color.hex,
  });
};

export const setToogleMood = () => (dispatch) => {
  dispatch({
    type: SET_PRIMARY_COLOR,
    payload: color.hex,
  });
};
