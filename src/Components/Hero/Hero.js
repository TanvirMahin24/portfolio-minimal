import React from "react";
import styles from "./Hero.module.css";
import { SocialIcons } from "./SocialIcons";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="d-block">
        <div className={styles.box}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.hero__left}></div>
        <div className={styles.hero__right}>
          <span className={styles.name}>
            Noor Ajmir <br />
            Tanvir
          </span>
          <span className={styles.title}>WEB DEVELOPER</span>
          <SocialIcons />
        </div>
      </div>
      Hero
    </div>
  );
};

export default Hero;
