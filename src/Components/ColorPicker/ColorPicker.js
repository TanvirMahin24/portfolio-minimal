import React, { useState } from "react";
import { SliderPicker } from "react-color";
import { AiOutlineBgColors } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { connect } from "react-redux";
import { setPrimaryColor } from "../../Actions/ColorActions";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ setPrimaryColor, primary }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        {!show && (
          <div className={styles.icon_section}>
            <AiOutlineBgColors onClick={() => setShow(true)} />
          </div>
        )}
        {show && (
          <>
            <span className={`${styles.close} d-block text-right`}>
              <VscClose onClick={() => setShow(false)} />
            </span>
            <span className={`${styles.title} d-block lead text-center pt-2`}>
              Pick a color
            </span>
            <SliderPicker
              color={primary}
              onChangeComplete={setPrimaryColor}
              className={styles.picker}
            />
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  primary: state.color.primary,
});

export default connect(mapStateToProps, { setPrimaryColor })(ColorPicker);
