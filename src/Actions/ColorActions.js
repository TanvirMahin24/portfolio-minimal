import { SET_PRIMARY_COLOR, TOOGLE_MOOD } from "../Constants/Types";

export const setPrimaryColor = (color) => (dispatch) => {
  dispatch({
    type: SET_PRIMARY_COLOR,
    payload: color.hex,
  });
};

export const setToogleMood = () => (dispatch) => {
  dispatch({
    type: TOOGLE_MOOD,
  });
};
