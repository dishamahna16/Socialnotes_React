import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

import { useHistory } from "react-router";

const Signup = (props) => {
  const history = useHistory();

  const [name, changeName] = useState("");
  const [mobile, changeMobile] = useState("");
  const [password, changePassword] = useState("");
  const [email, changeEmail] = useState("");
  const [mobileError, changeMobileError] = useState("");

  var phoneno = /^\d{10}$/;

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("SIGNUPP BUTTON CLICKED");

    // BACKEDNN OPERATION
    axios
      .post("http://localhost:8001/signup", {
        name: name,
        mobile: mobile,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);

        if (response.data.signupSuccess == true) {
          alert("Successfully Signed Up");

          console.log(props);
          history.push("/login");
        } else {
          alert("Singuped Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => handleSignup(e)} className="form singupform">
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Name
          </label>

          <input
            required
            onChange={(e) => changeName(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputName"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputMobile" class="form-label">
            Mobile
          </label>

          <input
            required
            onChange={(e) => changeMobile(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputMobile"
          />
        </div>

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
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;

//POST  emailId, password, console.log(response)
