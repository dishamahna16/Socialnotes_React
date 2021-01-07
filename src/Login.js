import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Navbar from "./Navbar";

const Login = () => {
  const history = useHistory();
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN BUTTON CLICKED");

    axios
      .post("http://localhost:8001/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.loginSuccess == true) {
          alert("Successfully Login");
          localStorage.setItem("userEmail", email);
          history.push("/notes");
        } else {
          alert("Login Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(email, password);
  };
  return (
    <>
      <Navbar />

      <form onSubmit={(e) => handleLogin(e)} class="form">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            required
            onChange={(e) => changeEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            required
            onChange={(e) => changePassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
