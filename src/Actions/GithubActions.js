import { GET_CONTRIBUTIONS, CONTRIBUTION_ERROR } from "../Constants/Types";
import axios from "axios";
import data from "../Constants/Data";
import contribDefaultData from "../Constants/DefaultContribution";
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
        query: getContributionQuery(),
      },
      config
    );

    dispatch({
      type: GET_CONTRIBUTIONS,
      payload:
        res.data.data.user.contributionsCollection.contributionCalendar.weeks,
    });
  } catch (err) {
    dispatch({
      type: CONTRIBUTION_ERROR,
      payload: contribDefaultData,
    });
    console.log(err);
  }
};
