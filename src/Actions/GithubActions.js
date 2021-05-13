import { GET_CONTRIBUTIONS } from "../Constants/Types";
import axios from "axios";
import data from "../Constants/Data";
import { getContributionQuery } from "../Constants/Query";

//GET Contributions
export const getContributions = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${data.tkn}`,
      },
    };
    const res = await axios.post(
      data.base,
      {
        query: getContributionQuery,
      },
      config
    );
    console.log(
      res.data.data.user.contributionsCollection.contributionCalendar
    );

    dispatch({
      type: GET_CONTRIBUTIONS,
      payload:
        res.data.data.user.contributionsCollection.contributionCalendar.weeks,
    });
  } catch (err) {
    //   dispatch({
    //     type: POST_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status },
    //   });
    console.log(err);
  }
};
