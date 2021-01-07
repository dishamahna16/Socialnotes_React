import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [mobile, changeMobile] = useState("");
  const [password, changePassword] = useState("");

  const handleLogin = (props) => {
    console.log("LOGIN BUTTON CLICKED");

    console.log(mobile, password);
  };
  return (
    <div class="flex flex-grey">
      <div class="fff">
        <form>
          <input
            onChange={(e) => changeMobile(e.target.value)}
            class="mobile inputele"
            placeholder="Mobile"
          />
          <input
            onChange={(e) => changePassword(e.target.value)}
            class="password inputele"
            placeholder="Password"
          />

          <button onClick={() => handleLogin()} class="btn" type="button">
            SignUp/Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
