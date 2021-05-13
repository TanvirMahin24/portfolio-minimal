import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContributions } from "../../Actions/GithubActions";

const GithubContribution = ({ getContributions }) => {
  useEffect(() => {
    getContributions();
  }, [getContributions]);
  return <div></div>;
};

export default connect(null, { getContributions })(GithubContribution);
