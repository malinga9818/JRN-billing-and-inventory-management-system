import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsAuth }) => {
  const navigate = useNavigate();

  //  handle logout
  const handleLogout = () => {
    alert("Are you sure to log out..");
    localStorage.removeItem("token"); // remove token from localStorage
    setIsAuth(false); // Update the auth state in app.js
    navigate("/sign-in", { replace: true }); // goes to signin oafe
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
