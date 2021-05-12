import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href="#!">
        <FiFacebook />
      </a>
      <a href="#!">
        <AiOutlineTwitter />
      </a>
      <a href="#!">
        <FiLinkedin />
      </a>
      <a href="#!">
        <FiGithub />
      </a>
      <a href="#!">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default SocialIcons;
