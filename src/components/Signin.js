import "../styles/Sign.css";

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

function Signin() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = useSignIn();
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
      const res = await axios.post(
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

      signIn({
        token: res.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: emailValue },
      });

      navigate(`/videos`);
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  };
  return (
    <div className="Sign-container">
      <form
        onSubmit={handleLoginSubmit}
        autoComplete="off"
        className="Sign-Form"
      >
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
          Sign in
        </button>
      </form>
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="Sign-Button"
      >
        Don't have an account? Sign up
      </button>
    </div>
  );
}

export default Signin;
