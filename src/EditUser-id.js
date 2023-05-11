import React, { useState, useEffect } from "react";

function EditUserId() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);

  function handleIdChange(event) {
    setId(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUpdateClick() {
    const updatedProfile = {
      name,
      email,
    };

    fetch(`https://61cc9b8c198df60017aec17e.mockapi.io/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Profile with ID ${id} has been updated.`);
        setProfile(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (id !== "") {
      fetch(`https://61cc9b8c198df60017aec17e.mockapi.io/profile/${id}`)
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  return (
    <div>
      <label htmlFor="id-input">Enter ID:</label>
      <input id="id-input" type="text" value={id} onChange={handleIdChange} />

      {profile && (
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={handleNameChange}
          />

          <label htmlFor="email-input">Email:</label>
          <input
            id="email-input"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />

          <button onClick={handleUpdateClick}>Update</button>
        </div>
      )}
    </div>
  );
}

export default EditUserId;
