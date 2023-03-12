import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

import "./index.css";

const loginCreds = JSON.parse(localStorage.getItem("loginCreds"));

const LoginForm = () => {
  //   state = {
  //     username: "",
  //     password: "",
  //     showSubmitError: false,
  //     errorMsg: "",
  //   };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  let navigate = useNavigate();
  const onSubmitSuccess = async (jwtToken) => {
    // let navigate = useNavigate();
    // navigate("/");
    await Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    navigate("/");
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError({ showSubmitError: true });
    setErrorMsg({ errorMsg: errorMsg });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const loggedUser = loginCreds.filter(
      (each) => each.username === username
    )[0];
    if (loggedUser.password === password) {
      onSubmitSuccess(loggedUser.category);
    } else {
      onSubmitFailure("Invalid User");
    }
  };

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        // value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  );

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        // value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  );

  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-form-container">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/006/303/711/small/book-logo-college-student-illustration-vector.jpg"
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src="https://img.freepik.com/free-photo/classmates-friends-bag-school-education_53876-137717.jpg?size=626&ext=jpg&ga=GA1.2.1901334115.1678623891&semt=sph"
        className="login-image"
        alt="website login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/303/711/small/book-logo-college-student-illustration-vector.jpg"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
