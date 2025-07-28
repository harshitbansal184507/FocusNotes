import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import logo from "../static/logo.png";

function Register() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Header Row: Logo Left, Button Right */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: "150px",
            width: "100%",
            height: "auto",
          }}
        />

        <button
          type="button"
          onClick={() => navigate("/login")}
          style={{
            backgroundColor: "#0077ff",
            color: "white",
            border: "none",
            padding: "10px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Login
        </button>
      </div>

      {/* Centered Form Below */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <Form route="/api/user/register/" method="register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
