import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import logo from "../static/logo.png";
function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header-logo">
        <img
          style={{ marginLeft: "20px", marginTop: "90px" }}
          src={logo}
          alt="Logo"
        />
      </div>
      <button
        type="button"
        onClick={() => navigate("/login")}
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
        Login
      </button>
      <Form route="/api/user/register/" method="register" />
    </div>
  );
}

export default Register;
