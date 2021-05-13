import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutMe } from "../../Components/AboutMe";
import Education from "../../Components/Education/Education";
import { Hero } from "../../Components/Hero";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Container>
        <Row>
          <Col md={6}>
            <AboutMe />
          </Col>
          <Col md={6}>
            <Education />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
