import React from "react";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, time, degree }) => {
  return (
    <div className={styles.item}>
      <div>
        <span className={styles.institution}>{institution}</span>
        <span className={styles.time}>{time}</span>
      </div>
      <span className={styles.degree}>{degree}</span>
    </div>
  );
};

export default EducationItem;
