import "../styles/Sign.css";

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      await axios.post(
        "http://localhost:5000/api/creators/signup",
        {
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      navigate(`/videos`);
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div className="Home-container">
      <form onSubmit={handleSignupSubmit} className="Home-Form">
        <input
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Name"
          className="Home-Input"
        />
        <input
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="Email"
          className="Home-Input"
        />
        <input
          value={passwordValue}
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          className="Home-Input"
        />
        {errorMessage !== "" ? (
          <label className="Home-Label">{errorMessage}</label>
        ) : (
          ""
        )}
        <button type="submit" className="Home-SubmitButton">
          Sign up
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/signin");
        }}
        className="Home-Button"
      >
        Already have an account? Sign in
      </button>
    </div>
  );
}

export default Signup;
