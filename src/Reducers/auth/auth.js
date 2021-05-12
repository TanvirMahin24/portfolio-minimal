// import {
//   REGISTER_FAIL,
//   REGISTER_SUCCESS,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   USER_LOADED,
//   LOGOUT,
// } from "../../Constants/Types/Types";

// const initialState = {
//   token: localStorage.getItem("token"),
//   isAuthenticated: null,
//   loading: true,
//   user: null,
// };

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
