import { useState } from "react";
import "./admin.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5c34b2e-80f5-4bd7-ab86-d5e2c9117b80");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contactform">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="input-box"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="input-box"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="input-box"
        ></textarea>
        <button type="submit" className="btn-submit">
          Submit Form
        </button>{" "}
      </form>

      <span id="contact_success">{result}</span>
    </div>
  );
}

// with thirdparty site - forward messages to email

// const [result, setResult] = useState("");

// const onSubmit = async (event) => {
//   event.preventDefault();
//   setResult("Sending....");
//   const formData = new FormData(event.target);

//   formData.append("access_key", "c5c34b2e-80f5-4bd7-ab86-d5e2c9117b80");

//   const response = await fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     body: formData,
//   });

//   const data = await response.json();

//   if (data.success) {
//     setResult("Form Submitted Successfully");
//     event.target.reset();
//   } else {
//     console.log("Error", data);
//     setResult(data.message);
//   }
// };

// <form onSubmit={onSubmit}>
//   <InputGroup className="input-group-alternative  mb-2">
//     <InputGroupAddon addonType="prepend">
//       <InputGroupText>
//         <i className="ni ni-user-run" />
//       </InputGroupText>
//     </InputGroupAddon>
//     <Input
//       placeholder="Your name"
//       type="text"
//       name="name"
//       required
//       // onChange={(e) => setName(e.target.value)}
//     />
//   </InputGroup>

//   {/* Email */}
//   <InputGroup className="input-group-alternative mb-2">
//     <InputGroupAddon addonType="prepend">
//       <InputGroupText>
//         <i className="ni ni-email-83" />
//       </InputGroupText>
//     </InputGroupAddon>
//     <Input
//       placeholder="Email address"
//       type="email"
//       name="email"
//       required
//       // onChange={(e) => setEmail(e.target.value)}
//     />
//   </InputGroup>

//   {/* Text Area */}
//   <FormGroup className="mb-4">
//     <Input
//       className="form-control-alternative  mb-2"
//       cols="80"
//       name="message"
//       placeholder="Type a message..."
//       rows="4"
//       type="textarea"
//       required
//       // onChange={(e) => setMessage(e.target.value)}
//     />
//   </FormGroup>
//   <div>
//     <Button
//       block
//       className="btn-round"
//       color="default"
//       size="lg"
//       type="button"
//       // onClick={submitData}
//     >
//       Send Message
//     </Button>
//   </div>
// </form>;

// const [Contact, setContact] = useState([]);
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [message, setMessage] = useState("");

// useEffect(() => {
//   Axios.get("http://localhost:8080/getContacts").then((response) => {
//     setContact(response.data);
//   });
// }, []);

// const submitData = () => {
//   toast.success("success");
//   Axios.post("http://localhost:8080/InsertnewContact", {
//     name: name,
//     email: email,
//     message: message,
//   })
//     .then((response) => {
//       // alert("New user created successfully!" + response.status);
//       // alert(response.status + "Success!");
//       alert(response.status);
//     })
//     .catch((err) => {
//       toast.error("Error");
//     });
// };
