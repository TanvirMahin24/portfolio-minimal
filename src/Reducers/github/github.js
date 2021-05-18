import { GET_CONTRIBUTIONS, CONTRIBUTION_ERROR } from "../../Constants/Types";

const initialState = { contributions: null, loading: true };

const github = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTRIBUTIONS:
    case CONTRIBUTION_ERROR:
      return { ...state, loading: false, contributions: payload };
    default:
      return state;
  }
};

export default github;
