import React from "react";
import { VscGithubAlt, VscMail, VscTwitter } from "react-icons/vsc";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import data from "../../../stub/SocialLinks/data";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href={data.facebook}>
        <RiFacebookLine alt="facebook" />
      </a>
      <a href={data.twitter}>
        <VscTwitter alt="twitter" />
      </a>
      <a href={data.linkedin}>
        <RiLinkedinLine alt="linkedin" />
      </a>
      <a href={data.github}>
        <VscGithubAlt alt="github" />
      </a>
      <a href={data.email}>
        <VscMail alt="email" />
      </a>
    </div>
  );
};

export default SocialIcons;
