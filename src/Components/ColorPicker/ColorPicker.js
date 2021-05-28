import React from "react";
import { SketchPicker } from "react-color";
import styles from "./ColorPicker.module.css";

const ColorPicker = () => {
  return (
    <div className={styles.wrapper}>
      <SketchPicker />
    </div>
  );
};

export default ColorPicker;
