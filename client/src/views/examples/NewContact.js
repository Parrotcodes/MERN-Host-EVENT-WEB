import React, { useState } from "react";
import axios from "axios";

const NewContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    axios
      .post("http://localhost:5000/newContact", { name, email, message })
      .then((res) => console.log("created new contact"))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email.."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="mesage.."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default NewContact;
