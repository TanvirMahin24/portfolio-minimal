import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { AboutMe } from "../../Components/AboutMe";
import { ColorPicker } from "../../Components/ColorPicker";
import Education from "../../Components/Education/Education";
import { Experience } from "../../Components/Experience";
import { Footer } from "../../Components/Footer";
import { Hero } from "../../Components/Hero";

const LandingPage = ({ primary, dark, light }) => {
  return (
    <div
      style={{
        "--color_orange": primary,
        "--color_dark": dark,
        "--color_light": light,
      }}
    >
      <ColorPicker />
      <Hero />
      <Container>
        <Row>
          <Col md={6}>
            <AboutMe />
          </Col>
          <Col md={6}>
            <Education />
            <Experience />
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

export default connect(mapStateToProps, null)(LandingPage);
