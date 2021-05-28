import { SET_PRIMARY_COLOR, TOOGLE_MOOD } from "../../Constants/Types";

const initialState = {
  primary: "#ef5124",
  dark: "#28292d",
  light: "#d3d3d3",
};

const color = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRIMARY_COLOR:
      return { ...state, primary: payload };

    case TOOGLE_MOOD:
      return { ...state, light: state.dark, dark: state.light };

    default:
      return state;
  }
};

export default color;
