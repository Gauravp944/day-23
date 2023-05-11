import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/edit-user/id")}>
        Edit user using Id
      </button>
      <br></br>
      <button onClick={() => navigate("/edit-user/profile")}>
        Edit user using Name
      </button>
    </div>
  );
}
