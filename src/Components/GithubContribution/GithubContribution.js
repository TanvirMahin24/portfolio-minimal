import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./GithubContribution.module.css";
import { getContributions } from "../../Actions/GithubActions";
import loadingGif from "../../Assets/Loading/beanLoading.gif";
import ContributionItem from "./ContributionItem/ContributionItem";

const GithubContribution = ({ getContributions, loading, contributions }) => {
  let i = 0,
    j = 0;
  useEffect(() => {
    getContributions();
  }, [getContributions]);
  return (
    <div className={styles.wrapper}>
      {loading && <img src={loadingGif} alt="" className={styles.loading} />}
      {!loading && (
        <div className={styles.stats}>
          {contributions.map((cont) => (
            <div key={i++} className={styles.row}>
              {cont.contributionDays.map((day) => (
                <ContributionItem
                  key={j++}
                  date={day.date}
                  count={day.contributionCount}
                />
              ))}
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.github.loading,
  contributions: state.github.contributions,
});

export default connect(mapStateToProps, { getContributions })(
  GithubContribution
);
