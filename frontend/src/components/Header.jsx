import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../static/logo.png";
import "../styles/Header.css"; // Assuming you have a CSS file for styling

function Header({ firstName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <header className="header-bar">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-action">
          <span className="header-username">
            Hi, <b>{firstName}</b>
          </span>
          <button onClick={handleLogout} className="header-logout-btn">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
