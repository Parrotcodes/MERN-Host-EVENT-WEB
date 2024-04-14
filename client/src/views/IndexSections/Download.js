/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="10">
                <h2 className="display-3">
                  Do you love Events{" "}
                  <span className="text-success">
                    What types of events does your organization typically
                    organize for students??
                  </span>
                </h2>
                <p className="lead">
                  Our organization hosts a diverse range of events, including
                  social mixers, academic workshops, cultural celebrations,
                  volunteer opportunities, and professional development
                  seminars. We strive to cater to the interests and needs of all
                  students across various disciplines.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href="/doc/Brouchere.pdf"
                    download
                  >
                    Download Brochure
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">OUR SPONSORS </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a href="#" id="rr">
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://www.freepnglogos.com/uploads/company-logo-png/brand-yamaha-motorcycle-logo-company-history-and-meaning-bike-emblem-24.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="rr">
                        SPONSOR - 1{" "}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a href="#" id="tooltip265846671">
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://www.zarla.com/images/starbucks-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        SPONSOR - 2{" "}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a href="#" id="tooltip233150499">
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://blog.hubspot.com/hs-fs/hubfs/McDonalds_Golden_Arches.svg.png?width=500&height=438&name=McDonalds_Golden_Arches.svg.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        SPONSOR - 3{" "}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a href="#" id="tooltip308866163">
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://blog.hubspot.com/hs-fs/hubfs/Pepsi_logo_2014.svg.png?width=450&height=458&name=Pepsi_logo_2014.svg.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        SPONSOR - 4{" "}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a href="#" id="tooltip76119384">
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        SPONSOR - 5{" "}
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a href="#" id="tooltip646643508">
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://e7.pngegg.com/pngimages/159/464/png-clipart-royal-enfield-bullet-car-enfield-cycle-co-ltd-motorcycle-car-text-trademark-thumbnail.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                        SPONSOR - 6{" "}
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
