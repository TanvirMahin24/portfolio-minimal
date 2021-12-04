import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import data from "../../stub/Testimonials/data";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import { Row, Col } from "react-bootstrap";

const Testimonials = () => {
  const [selectedData, setSelectedData] = useState(0);
  const [inProp, setInProp] = useState(true);
  useEffect(() => {
    const stateChangeFunc = () => {
      setInProp(false);
      setTimeout(() => {
        if (selectedData + 1 >= data.length) {
          setSelectedData(0);
        } else {
          setSelectedData(selectedData + 1);
        }
        // console.log(selectedData);
      }, 5000);
      setInProp(true);
    };
    stateChangeFunc();
  }, [selectedData]);

  return (
    <Row>
      <Col md={12}>
        <h1 className={styles.title}>What People Say</h1>
      </Col>
      <Col md={6}>
        {inProp && <TestimonialItem inProp={inProp} {...data[selectedData]} />}
      </Col>
      <Col md={6} className="d-md-block d-none">
        <TestimonialItem
          inProp={inProp}
          {...data[selectedData == data.length - 1 ? 0 : selectedData + 1]}
        />
      </Col>
      <Col md={12}>
        <div className="d-flex justify-content-center align-items-center pt-4">
          {data.map((item) => (
            <div
              className={
                item.id - 1 === selectedData ? styles.activeDot : styles.dot
              }
            ></div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Testimonials;
