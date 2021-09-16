import React from "react";
import styles from "./FillerPatterns.module.css";
import FillItem from "./FillItem/FillItem";

const FillerPatterns = () => {
  return (
    <div className={styles.wrapper}>
      <FillItem />
      <FillItem />
      <FillItem />
      <FillItem />
    </div>
  );
};

export default FillerPatterns;
