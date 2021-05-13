import React from "react";
import WinBox from "winbox/src/js/winbox";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, time, degree }) => {
  const clickHandeler = () => {
    const modal = new WinBox();
    modal.setBackground("var(--color_orange)");
    modal.setTitle(`${institution}`);
  };
  return (
    <div className={styles.item}>
      <div>
        <span onClick={clickHandeler} className={styles.institution}>
          {institution}
        </span>
        <span className={styles.time}>{time}</span>
      </div>
      <span className={styles.degree}>{degree}</span>
    </div>
  );
};

export default EducationItem;
