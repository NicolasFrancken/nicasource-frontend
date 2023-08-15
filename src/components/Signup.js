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
    <div className="Sign-container">
      <form onSubmit={handleSignupSubmit} className="Sign-Form">
        <input
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Name"
          className="Sign-Input"
        />
        <input
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="Email"
          className="Sign-Input"
        />
        <input
          value={passwordValue}
          type="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          className="Sign-Input"
        />
        {errorMessage !== "" ? (
          <label className="Sign-Label">{errorMessage}</label>
        ) : (
          ""
        )}
        <button type="submit" className="Sign-SubmitButton">
          Sign up
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/signin");
        }}
        className="Sign-Button"
      >
        Already have an account? Sign in
      </button>
    </div>
  );
}

export default Signup;
