import React, { useState } from "react";

function DeleteUser() {
  const [id, setId] = useState("");

  function handleIdChange(event) {
    setId(event.target.value);
  }

  function handleDeleteClick() {
    fetch(`https://61cc9b8c198df60017aec17e.mockapi.io/profile/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(`Profile with ID ${id} has been deleted.`);
        setId("");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <label htmlFor="id-input">Enter ID:</label>
      <input id="id-input" type="text" value={id} onChange={handleIdChange} />
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default DeleteUser;
