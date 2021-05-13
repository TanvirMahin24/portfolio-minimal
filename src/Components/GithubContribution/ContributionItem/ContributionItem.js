import React, { useEffect } from "react";
import styles from "./ContributionItem.module.css";

const ContributionItem = ({ count }) => {
  let lvl = 0;
  if (count > 0 && count < 2) {
    lvl = 1;
  } else if (count >= 2 && count < 3) {
    lvl = 2;
  } else if (count >= 3 && count < 4) {
    lvl = 3;
  } else if (count >= 4 && count < 5) {
    lvl = 4;
  } else if (count > 5) {
    lvl = 5;
  }
  return (
    <div
      className={`${styles.item} ${
        lvl === 0
          ? styles.lv0
          : lvl === 1
          ? styles.lv1
          : lvl === 2
          ? styles.lv2
          : lvl === 3
          ? styles.lv3
          : lvl === 4
          ? styles.lv4
          : styles.lv5
      }`}
    ></div>
  );
};

export default ContributionItem;
