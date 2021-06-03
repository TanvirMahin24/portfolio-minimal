import React, { useState } from "react";
import WinboxReact from "winbox-react";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, time, degree, content }) => {
  const [show, setShow] = useState(false);

  const options = {
    title: institution,
    border: "4",
    x: "center",
    y: "center",
    modern: true,
  };

  const clickHandeler = () => {
    setShow(!show);
  };

  return (
    <div className={styles.item}>
      {show && (
        <WinboxReact {...options} onClose={clickHandeler}>
          {content}
        </WinboxReact>
      )}
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
