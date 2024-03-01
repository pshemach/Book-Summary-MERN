import React, { useState } from "react";
import "./SignUpIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", values).then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        console.log("Login successful");
        setError("");
        setSuccess(true);
        navigate("/portfolio");
      });
    } catch (err) {
      console.error("Login failed", err.response.data);
      setError(err.response.data.message);
      setSuccess(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title">Sign in</h2>
      <div>
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Enter Your Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign In</button>
      {success && <p style={{ color: "green" }}>Login successful!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
