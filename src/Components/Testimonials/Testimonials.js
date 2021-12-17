import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import data from "../../stub/Testimonials/data";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import { Row, Col } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Testimonials = () => {
  return (
    <>
      <h1 className={styles.title}>What People Say</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 0.8,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        pagination={false}
        className="mySwiper"
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide>
            <TestimonialItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
