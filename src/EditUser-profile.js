import React, { useState, useEffect } from "react";

function EditUserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUpdateClick() {
    const updatedProfile = {
      email,
    };

    fetch(`https://61cc9b8c198df60017aec17e.mockapi.io/profile/${name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Profile with ID ${name} has been updated.`);
        setProfile(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (name !== "") {
      fetch(`https://61cc9b8c198df60017aec17e.mockapi.io/profile/${name}`)
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error(error));
    }
  }, [name]);

  return (
    <div>
      <label htmlFor="name-input">Enter Name:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      {profile && (
        <div>
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

export default EditUserProfile;
