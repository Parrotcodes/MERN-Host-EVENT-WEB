import { useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import NewContact from "../NewContact";
const UserForm = () => {
  // const [ListofUsers, SetListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const CreateNewUser = (e) => {
    e.preventDefault();
    console.log(name, email, college, mobile);

    axios
      .post("http://localhost:4000/createUser", (req, res) => {
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send({
          name,
          email,
          college,
          mobile,
        });
      })
      .then((r) => console.log("users created ", r))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NewContact />
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-istanbul" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="College Name"
            type="text"
            onChange={(e) => setCollege(e.target.value)}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-mobile-button" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Mobile Number"
            type="number"
            autoComplete="off"
            onChange={(e) => setMobile(e.target.value)}
          />
        </InputGroup>
      </FormGroup>
      <Row className="my-4">
        <Col xs="12">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input
              className="custom-control-input"
              id="customCheckRegister"
              type="checkbox"
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegister"
            >
              <span>
                I agree with the{" "}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <Button
          className="mt-4"
          color="primary"
          type="button"
          onClick={CreateNewUser}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
