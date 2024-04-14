import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("../../assets/img/brand/headerlogo.gif")}
                      style={{ width: "350px" }}
                    />
                    <p className="lead text-white">
                      "Unite, Engage, Thrive: Join us in organizing an
                      unforgettable college event for private and government
                      college students! Let's create memories together!"
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        size="lg"
                        href="/doc/Brouchere.pdf"
                        target="_blank"
                        download
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">
                          Download Brochure
                        </span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="/register"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-tag" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Register</span>
                          for an Event
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="#"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 200"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 200 0 200"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
