import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import UserList from "./ListUsers";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import EditUserProfile from "./EditUser-profile";
import EditUserId from "./EditUser-id";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/edit-user/id" element={<EditUserId />} />
        <Route path="/edit-user/profile" element={<EditUserProfile />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        {/* <Route path="/employee/view/:id/:name" element={<ViewEmployee />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
