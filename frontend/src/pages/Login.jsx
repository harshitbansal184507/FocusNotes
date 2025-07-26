import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form.jsx";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("/register")}
        style={{
          marginTop: "20px",
          marginLeft: "1100px",

          backgroundColor: "#0077ff",
          color: "white",
          border: "none",
          padding: "10px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          alignContent: "center",
        }}
      >
        Register
      </button>
      <Form route="/api/token/" method="login" />

      <div style={{ marginTop: "20px", textAlign: "center" }}></div>
    </div>
  );
}

export default Login;
