import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineFieldTime } from "react-icons/ai";
import styles from "./ContributionItem.module.css";

const ContributionItem = ({ count, date }) => {
  let lvl = 0;
  if (count === 1) {
    lvl = 1;
  } else if (count === 2) {
    lvl = 2;
  } else if (count === 3) {
    lvl = 3;
  } else if (count === 4) {
    lvl = 4;
  } else if (count >= 5) {
    lvl = 5;
  }
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      key="top"
      placement="top"
      overlay={
        <Popover id={`popover-positioned-top`} className={styles.tooltip}>
          <Popover.Content className={styles.text}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <VscGithubAlt className={styles.github} />
              </div>
              <div className="px-3">
                <span className={`${styles.title} d-block`}>
                  <strong>{count}</strong> Github Contribution
                </span>
                <div className={styles.date}>
                  <div className="d-flex align-items-center justify-content-start">
                    <div>
                      <strong>
                        <AiOutlineFieldTime />
                      </strong>
                    </div>
                    <div className="d-block pt-1 px-1"> {date}</div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Content>
        </Popover>
      }
    >
      <div
        className={`${styles.item} ${
          lvl === 0
            ? styles.lv0
            : lvl === 1
            ? styles.lv1
            : lvl === 2
            ? styles.lv2
            : lvl === 3
            ? styles.lv3
            : lvl === 4
            ? styles.lv4
            : styles.lv5
        }`}
      ></div>
    </OverlayTrigger>
  );
};

export default ContributionItem;
