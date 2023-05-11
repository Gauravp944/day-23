import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
        <li>
          <Link to="/create-user">Create User</Link>
        </li>
        <li>
          <Link to="/edit-user">Edit User</Link>
        </li>
        <li>
          <Link to="/delete-user">Delete User</Link>
        </li>
      </ul>
    </div>
  );
}
