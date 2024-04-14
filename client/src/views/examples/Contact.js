import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
import SimpleFooter from "../../components/Footers/SimpleFooter.js";
import Contact from "./ContactForm.js";

// index page sections

class Landing extends React.Component {
  state = {};

  render() {
    return (
      <>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <DemoNavbar className="bg-primary" />
        </section>
        <main ref="main">
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Amazing Event Organizing Team</h2>
                  <p className="text-muted">
                    "Meet our dynamic event organizing team! Comprised of
                    passionate individuals dedicated to creating unforgettable
                    experiences for students. From brainstorming innovative
                    ideas to flawlessly executing every detail, we're here to
                    ensure your college journey is filled with exciting memories
                    and meaningful connections. Let's make every event memorable
                    together!"
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">President</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">Vice-President</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">Co-Ordinator</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">
                          Stuent Co-Ordinator
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made Event Fun & Joy for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        Our college hosts a diverse range of events and
                        celebrations, including cultural festivals, sports
                        tournaments, academic symposiums, and community service
                        projects, ensuring there's something for everyone to
                        participate in and enjoy.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="/doc/Brouchere.pdf"
                        size="lg"
                        download
                      >
                        Event Brochure{" "}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-sm bg-gradient-default">
            <Container className="pt-sm pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Contact Us</h2>
                  <p className="lead text-white">
                    Contact us for inquiries, collaborations, or suggestions.
                    We're here to assist you in making your college experience
                    extraordinary.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to Share Your Idea with us?</h4>
                      <p className="mt-0">Your idea is very important to us.</p>
                      <Contact />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
