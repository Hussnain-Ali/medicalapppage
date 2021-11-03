import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeaderSec = () => {
  return (
    <div className="header-sec">
      <Container>
        <Row>
          <Col sm={6} className="header-inner ">
            <h1 className="header-heading ">Hi, Julie</h1>
            <div className="d-flex">
              <p className="plan">YOUR PLAN: </p>
              <strong className="boutique">Boutique</strong>
            </div>
            <p className="header-content text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolore quae ea! Nesciunt ad, culpa molestias qui dignissimos,
              tempore ebitis non voluptatum nostrum voluptas nemo unde.!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderSec;
