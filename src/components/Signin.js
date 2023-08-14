import "../styles/Sign.css";

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/creators/signin",
        {
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
      <form
        onSubmit={handleLoginSubmit}
        autoComplete="off"
        className="Home-Form"
      >
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
          Log in
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="Home-Button"
      >
        Don't have an account? Sign up
      </button>
    </div>
  );
}

export default Signin;
