import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-sm mb-5 text-center fa-4x">
          <span>List of Events</span>
        </h2>
        <Row>
          <Col sm="3" xs="6">
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("../../assets/img/e3.jpg")}
              style={{ width: "150px" }}
            />
            <small className="d-block mt-4 text-uppercase font-weight-bold mb-4">
              City and museum tours{" "}
            </small>
          </Col>
          <Col sm="3" xs="6">
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("../../assets/img/e2.jpg")}
              style={{ width: "150px" }}
            />
            <small className="d-block mt-3 pl-3 text-uppercase font-weight-bold mb-4">
              Book debates{" "}
            </small>
          </Col>
          <Col sm="3" xs="6">
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("../../assets/img/e1.png")}
              style={{ width: "150px" }}
            />
            <small className="d-block mt-3 text-uppercase font-weight-bold mb-4">
              Theater prop workshops{" "}
            </small>
          </Col>
          <Col sm="3" xs="6">
            <img
              alt="..."
              className="img-fluid rounded shadow"
              src={require("../../assets/img/ev4.png")}
              style={{ width: "150px" }}
            />
            <small className="d-block mt-3 pl-3 text-uppercase font-weight-bold mb-4">
              Gallery crawls{" "}
            </small>
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
