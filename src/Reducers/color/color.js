import { SET_PRIMARY_COLOR, TOOGLE_MOOD } from "../../Constants/Types";

const initialState = {
  primary: "#ef5124",
  dark: "#28292d",
  light: "#d3d3d3",
  toggle: false,
};

const color = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRIMARY_COLOR:
      localStorage.setItem("custom_color", payload);
      return { ...state, primary: payload };

    case TOOGLE_MOOD:
      localStorage.setItem("light_mood", !state.toggle);
      return {
        ...state,
        light: state.dark,
        dark: state.light,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};

export default color;
