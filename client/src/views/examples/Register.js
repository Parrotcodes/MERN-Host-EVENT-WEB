import React, { useState } from "react";
import "./admin.css";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const CreateUser = async (e) => {
    e.preventDefault();
    // console.log(name, College, age, mobile);
    try {
      const response = await fetch("http://localhost:5000/newuser", {
        method: "post",
        body: JSON.stringify({ name, age, college, email, mobile }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      alert("user created successfully!");
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };
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
      <section className="section section-lg pt-lg-0 section-contact-us registerForm">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">Want to Join with us?</h4>
                  <p className="mt-0">
                    <b>Please Register for the ATRI Event..</b>
                  </p>
                  <div className="contactform">
                    <form onSubmit={CreateUser}>
                      <input
                        type="text"
                        placeholder="Name..."
                        className="input-box"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="number"
                        placeholder="Age..."
                        className="input-box"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="College..."
                        className="input-box"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                      />
                      <input
                        type="email"
                        placeholder="Email..."
                        className="input-box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <input
                        type="number"
                        placeholder="Mobile..."
                        className="input-box"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <button type="submit" className="btn-submit">
                        Register
                      </button>
                    </form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <SimpleFooter />
    </>
  );
};

export default Register;

// import React from "react";

// // reactstrap components
// import { Card, CardBody, Form, Container, Row, Col } from "reactstrap";
// import UserForm from "./userForm/UserForm.js";
// // core components
// import DemoNavbar from "../../components/Navbars/DemoNavbar.js";
// import SimpleFooter from "../../components/Footers/SimpleFooter.js";

// class Register extends React.Component {
//   render() {
//     return (
//       <>
//         <DemoNavbar />
//         <main ref="main">
//           <section className="section section-shaped section-lg">
//             <div className="shape shape-style-1 bg-gradient-default">
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//               <span />
//             </div>
//             <Container className="pt-lg-7">
//               <Row className="justify-content-center">
//                 <Col lg="5 text-center">
//                   <h2 className="text-white"> Event Registration From</h2>
//                   <Card className="bg-secondary shadow border-0">
//                     <CardBody className="px-lg-5 py-lg-5">
//                       <div className="text-center text-muted mb-4">
//                         <h6>Fill your details</h6>
//                       </div>
//                       <Form role="form">
//                         <UserForm />
//                       </Form>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section>
//         </main>
//         <SimpleFooter />
//       </>
//     );
//   }
// }

// export default Register;
