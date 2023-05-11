import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { name, email, username, address };

    axios
      .post("https://61cc9b8c198df60017aec17e.mockapi.io/profile", user)
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setUsername("");
        setAddress("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
