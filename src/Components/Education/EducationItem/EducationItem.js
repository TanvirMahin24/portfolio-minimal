import React, { useEffect, useState } from "react";
import WinboxReact from "winbox-react";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, time, degree }) => {
  const [show, setShow] = useState(false);
  const clickHandeler = () => {
    setShow(!show);
  };

  return (
    <div className={styles.item}>
      {show && <WinboxReact onClose={clickHandeler} />}
      <div>
        <span onClick={() => clickHandeler()} className={styles.institution}>
          {institution}
        </span>
        <span className={styles.time}>{time}</span>
      </div>
      <span className={styles.degree}>{degree}</span>
    </div>
  );
};

export default EducationItem;
