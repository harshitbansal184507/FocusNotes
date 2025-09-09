import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN, FIRST_NAME } from "../constants";
import "../styles/Form.css";

function Form({ route, method }) {
  // route is the route which we want to go one we submit the form (token(login basically we'll collect token first) or register)
  // method is telling whether we are registering or are we logging in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formName = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    // here e is the event and wwe are preventing default behaviour off form , which is to reload page , bcz here we handl form submission with help of api
    setLoading(true);
    e.preventDefault();

    try {
      let data = { email, password };

      if (method === "register") {
        data = {
          ...data,
          first_name: firstName,
          last_name: lastName,
        };
      }

      const res = await api.post(route, data);

      console.log("Full response:", res);

      if (method === "login") {
        // if we are logging in then we will get access token and refresh token
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        const res2 = await api.get("/api/user/info/");

        localStorage.setItem(FIRST_NAME, res2.data.first_name);

        console.log("🧩 Token saved to localStorage:");
        console.log("accessToken", res.data.access);
        console.log("refreshToken", res.data.refresh);
        console.log("firstName", res2.data.first_name);

        navigate("/");
      } else {
        navigate("/login"); // if we are registering then we will redirect to login page
      }
    } catch (err) {
      console.error("Error during form submission:", err);
      alert(err);
      console.log(err.response?.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">{formName}</h2>
      {method === "register" && (
        <>
          <input
            className="form-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </>
      )}
      <input
        className="form-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button className="form-button" type="submit">
        {formName}
      </button>
    </form>
  );
}
export default Form;
