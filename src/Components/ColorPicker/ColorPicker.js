import React from "react";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { setPrimaryColor } from "../../Actions/ColorActions";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ setPrimaryColor, primary }) => {
  return (
    <div className={styles.wrapper}>
      <SketchPicker color={primary} onChangeComplete={setPrimaryColor} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  primary: state.color.primary,
});

export default connect(mapStateToProps, { setPrimaryColor })(ColorPicker);
