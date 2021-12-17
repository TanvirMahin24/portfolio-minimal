import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import styles from "./Youtube.module.css";
import { FaYoutube } from "react-icons/fa";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { BorderedSection } from "../Shared/BorderedSection";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Autoplay]);

const Youtube = () => {
  return (
    <Container>
      <BorderedSection title={"Youtube"}>
        <Row>
          <Col md={6} className="d-flex justify-content-around flex-column">
            <span className="d-block">
              Making Youtube Vides have been a great passion for me. It gives me
              the chance to share my knowledge and experience with the world.
              While making the videos I get chance to improve my skills and this
              helps me a lot as a web developer.
            </span>
            <div className="pt-4">
              <a
                href="https://www.upwork.com/freelancers/~01cc30f944166fcadf"
                className={styles.contact__btn}
              >
                <FaYoutube /> Visit Channel
              </a>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <div className={styles.wrapper}>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                autoplay={{ delay: 2500, disableOnInteraction: true }}
                pagination={false}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="img-fluid"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    className="img-fluid"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </BorderedSection>
    </Container>
  );
};

export default Youtube;
