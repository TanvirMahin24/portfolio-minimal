import React, { useState } from "react";
import { SliderPicker } from "react-color";
import { AiOutlineBgColors } from "react-icons/ai";
import { RiSunLine } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { GrUndo } from "react-icons/gr";
import { BsMoon } from "react-icons/bs";
import { connect } from "react-redux";
import { setPrimaryColor, setToogleMood } from "../../Actions/ColorActions";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ setPrimaryColor, primary, dark, setToogleMood }) => {
  const [show, setShow] = useState(false);
  const [night, setNight] = useState(true);

  const toogleHandeler = () => {
    setNight(!night);
    setToogleMood();
  };

  const defaultHandeler = () => {
    if (dark !== "#28292d") {
      setToogleMood();
    }
    if (primary !== "#ef5124") {
      setPrimaryColor({ hex: "#ef5124" });
    }
  };

  let check = false;
  if (primary !== "#ef5124" || dark !== "#28292d") {
    check = true;
  }

  return (
    <>
      <div className={styles.wrapper}>
        {!show && (
          <div className={styles.icon_section}>
            <span className={`px-2 ${styles.icon}`}>
              {night && <RiSunLine onClick={toogleHandeler} />}
              {!night && <BsMoon onClick={toogleHandeler} />}
            </span>
            <span className={`px-2 ${styles.icon}`}>
              <AiOutlineBgColors onClick={() => setShow(true)} />
            </span>
          </div>
        )}
        {show && (
          <>
            <div className={`${styles.close} d-flex justify-content-between`}>
              <VscClose onClick={() => setShow(false)} />
              {check && <GrUndo onClick={() => defaultHandeler()} />}
            </div>
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
  dark: state.color.dark,
});

export default connect(mapStateToProps, { setPrimaryColor, setToogleMood })(
  ColorPicker
);
