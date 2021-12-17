import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { setToogleMood, setPrimaryColor } from "../../Actions/ColorActions";
import { AboutMe } from "../../Components/AboutMe";
import { ColorPicker } from "../../Components/ColorPicker";
import Education from "../../Components/Education/Education";
import { Experience } from "../../Components/Experience";
import { Footer } from "../../Components/Footer";
import { Hero } from "../../Components/Hero";
import { Certificates } from "../../Components/Certificates";
import { Projects } from "../../Components/Projects";
import { Upwork } from "../../Components/Upwork";
import { Testimonials } from "../../Components/Testimonials";
import Youtube from "../../Components/Youtube/Youtube";

const LandingPage = ({
  primary,
  dark,
  light,
  setToogleMood,
  setPrimaryColor,
}) => {
  useEffect(() => {
    let flag = localStorage.getItem("light_mood");
    let colorFlag = localStorage.getItem("custom_color");
    if (flag === "true") {
      setToogleMood();
    }
    if (colorFlag) {
      setPrimaryColor({ hex: colorFlag });
    }
    console.log(colorFlag);
  }, [setToogleMood, setPrimaryColor]);
  return (
    <div
      style={{
        "--color_orange": primary,
        "--color_dark": dark,
        "--color_light": light,
        background: dark,
        width: "100%",
        height: "100%",
      }}
    >
      <ColorPicker />
      <Hero />
      <Youtube />
      <Container>
        <Row>
          <Col md={6}>
            <AboutMe />
            <Projects />
          </Col>
          <Col md={6}>
            <Education />
            <Experience />
            <Certificates />
            {/* <FillerPatterns /> */}
            <Upwork />
          </Col>
        </Row>
        <Row>
          <Col>
            <Testimonials />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  primary: state.color.primary,
  dark: state.color.dark,
  light: state.color.light,
});

export default connect(mapStateToProps, { setToogleMood, setPrimaryColor })(
  LandingPage
);
