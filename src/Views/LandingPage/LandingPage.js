import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutMe } from "../../Components/AboutMe";
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
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
